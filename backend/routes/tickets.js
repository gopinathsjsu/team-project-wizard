const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { HTTP_STATUS_CODES } = require('../constants')
const Ticket = require('../models/tickets');
const ShowTime = require('../models/showTimes');
const Payment = require('../models/payments');
const User = require('../models/users');
const Screen = require('../models/screens');

const SERVICE_FEE_PER_TICKET = 1.50;

router.post('/book', async (req, res) => {
    try {
        const { userId, showTimeId, selectedSeats, cardDetails, modeOfPayment } = req.body;

        if (!userId || !showTimeId || !selectedSeats) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const user = await User.findById(userId);
        const showTime = await ShowTime.findById(showTimeId).populate('movieId').populate('screenId');
        if (!user || !showTime) {
            return res.status(404).json({ message: 'User or Showtime not found' });
        }

        const screen = await Screen.findById(showTime.screenId._id);

        let totalCost = 0;
        let ticketCount = 0;
        Object.keys(selectedSeats).forEach(row => {
            ticketCount += selectedSeats[row].filter(seat => seat.isSelected).length;
        });

        totalCost = screen.cost * ticketCount;

        let isPremiumMember = user.memberShipType === 'premium';
        if (!isPremiumMember) {
            totalCost += SERVICE_FEE_PER_TICKET;
        }

        let newPayment;

        if (modeOfPayment === 'points') {
            if (user.rewardPoints < totalCost) {
                return res.status(400).json({ message: 'Insufficient reward points' });
            }
            user.rewardPoints -= totalCost;
            await user.save();
            newPayment = new Payment({
                transactionId: new mongoose.Types.ObjectId(),
                cardDetails,
                status: 'pending',
                userId,
                modeOfPayment
            });

        } else if (modeOfPayment === 'card') {
            newPayment = new Payment({
                transactionId: new mongoose.Types.ObjectId(),
                cardDetails,
                status: 'pending',
                userId,
                modeOfPayment
            });

            await newPayment.save();

            //Payment gateway integration?
            const paymentSuccessful = true;

            if (!paymentSuccessful) {
                await Payment.findByIdAndUpdate(newPayment._id, { status: 'failed' });
                return res.status(400).json({ message: 'Payment failed, ticket not booked' });
            }

            await Payment.findByIdAndUpdate(newPayment._id, { status: 'completed' });

            let pointsToAccumulate = isPremiumMember ? screen.cost * ticketCount : totalCost;
            user.rewardPoints += Math.floor(pointsToAccumulate);
            await user.save();
        } else {
            return res.status(400).json({ message: 'Invalid payment method' });
        }

        let seats = JSON.parse(showTime.seats);
        Object.keys(selectedSeats).forEach(row => {
            selectedSeats[row].forEach(selectedSeat => {
                if (selectedSeat.isSelected) {
                    let seatIndex = seats[row].findIndex(s => s.col === selectedSeat.col);
                    if (seatIndex !== -1 && seats[row][seatIndex].isAvailable) {
                        seats[row][seatIndex].isAvailable = false;
                        seats[row][seatIndex].isSelected = false;
                        seats[row][seatIndex].userId = userId;
                    }
                }
            });
        });

        showTime.seats = JSON.stringify(seats);
        showTime.seatsAvailable -= ticketCount
        await showTime.save();

        const newTicket = new Ticket({
            userId: userId,
            movieId: showTime.movieId._id,
            screenId: showTime.screenId._id,
            showTime: showTime.startTime,
            showTimeId: showTime._id,
            totalCost: totalCost,
            bookingDate: Date.now(),
            numberOfSeats: ticketCount,
            transactionId: newPayment.transactionId,
            qrUrls: [],
            seats: JSON.stringify(selectedSeats),
            isActive: true
        });

        await newTicket.save();

        res.json({ message: 'Ticket booked successfully', status: HTTP_STATUS_CODES.CREATED, ticket: newTicket });
    } catch (error) {
        console.error('Error while booking ticket:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/cancel', async (req, res) => {
    try {
        const { transactionId } = req.body;

        // if (!userId) {
        //     return res.status(400).json({ message: 'User ID is required' });
        // }

        if (!transactionId) {
            return res.status(400).json({ message: 'Transaction ID is required' });
        }

        const ticket = await Ticket.findOne({ transactionId: transactionId });
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }

        // const currentTime = new Date();
        // if (currentTime >= ticket.showTime) {
        //     return res.status(400).json({ message: 'Cancellation is not allowed past the showtime' });
        // }

        const payment = await Payment.findOne({ transactionId: ticket.transactionId });
        if (!payment) {
            return res.status(404).json({ message: 'Associated payment record not found' });
        }

        if (payment.modeOfPayment === 'card') {
            // refund processing with payment gateway?
            const refundSuccessful = true;

            if (!refundSuccessful) {
                return res.status(400).json({ message: 'Refund failed' });
            }

            payment.status = 'refunded';
            await payment.save();

        } else if (payment.modeOfPayment === 'points') {
            const user = await User.findById(ticket.userId);
            user.rewardPoints += Math.Floor(ticket.totalCost);
            await user.save();
            payment.status = 'refunded';
            await payment.save();
        }

        ticket.isActive = false;
        await ticket.save();

        const showTime = await ShowTime.findById(ticket.showTimeId);
        if (!showTime) {
            return res.status(404).json({ message: 'Screen not found' });
        }

        let seats = JSON.parse(showTime.seats);
        const selectedSeats = JSON.parse(ticket.seats);
        Object.keys(selectedSeats).forEach(row => {
            selectedSeats[row].forEach(selectedSeat => {
                let seatIndex = seats[row].findIndex(s => s.col === selectedSeat.col);
                if (seatIndex !== -1) {
                    seats[row][seatIndex].isAvailable = true;
                    seats[row][seatIndex].isSelected = false;
                    delete seats[row][seatIndex].userId;
                }
            });
        });

        showTime.seats = JSON.stringify(seats);
        showTime.seatsAvailable += ticket.numberOfSeats
        await showTime.save();

        res.json({ message: 'Ticket cancelled successfully', status: HTTP_STATUS_CODES.OK });
    } catch (error) {
        console.error('Error while cancelling ticket:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/getAll', async (req, res) => {
    try {
        const tickets = await Ticket.find({isActive: true});
        res.json({ message: 'Tickets retrieved successfully', status: HTTP_STATUS_CODES.OK, tickets });
    } catch (error) {
        console.error('Error fetching tickets:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/getByUserId/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const tickets = await Ticket.find({ userId: userId, isActive: true });
        if (!tickets || tickets.length === 0) {
            return res.status(404).json({ message: 'No tickets found for this user' });
        }

        res.json({ message: 'Tickets retrieved successfully', status: HTTP_STATUS_CODES.OK, tickets });
    } catch (error) {
        console.error('Error fetching tickets:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/getByTransactionId/:transactionId', async (req, res) => {
    try {
        const { transactionId } = req.params;
        if (!transactionId) {
            return res.status(400).json({ message: 'Transaction ID is required' });
        }

        const ticket = await Ticket.findOne({ transactionId: transactionId, isActive: true });
        if (!ticket) {
            return res.status(404).json({ message: 'No ticket found for this transaction' });
        }

        res.json({ message: 'Ticket retrieved successfully', status: HTTP_STATUS_CODES.OK, ticket });
    } catch (error) {
        console.error('Error fetching ticket:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
