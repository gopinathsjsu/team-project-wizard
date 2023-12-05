require('dotenv').config()
const express = require('express')
const router = express.Router();
const Screen = require('../models/screens');
const ShowTime = require('../models/showTimes');
const { HTTP_STATUS_CODES } = require('../constants')

router.post('/add', async (req, res) => {
    try {
        payload = req.body;
        const seatConfig = payload.seats;

        const newScreen = new Screen({
            screenName: payload.screenName,
            screenType: payload.screenType,
            rows: payload.rows,
            columns: payload.col,
            seatingCapacity: payload.rows * payload.col,
            seatsAvailable: payload.rows * payload.col,
            cost: payload.cost,
            seats: JSON.stringify(seatConfig),
            theatreId: payload.theatreId,
            isActive: true
        });

        const screen = await newScreen.save();
        res.json({ message: "Added screen successfully", status: HTTP_STATUS_CODES.OK, data: screen });
    } catch (error) {
        console.error('Error while adding screen:', error);
        res.json({
            message: "Internal Server Error",
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
        })
    }
});

router.get('/getAll', async (req, res) => {
    try {
        const screens = await Screen.find({ isActive: true });
        if (screens.length) {
            const showTimes = await ShowTime.find({ isActive: true });

            if (showTimes.length) {
                screens.forEach(screen => {
                    // Filter screens for the current theatre
                    const showTimesList = showTimes.filter(showTime => showTime.screenId.toString() === screen._id.toString());
                    // Assign screensList to the current theatre
                    screen._doc.showTimesDetail = showTimesList; // Using _doc to directly modify the document
                });
            }
        } else {
            return res.json({
                message: 'No screens found',
                status: HTTP_STATUS_CODES.OK,
                data: []
            });
        }

        res.json({
            message: 'Records found',
            status: HTTP_STATUS_CODES.OK,
            data: screens
        });
    }
    catch (err) {
        console.error('Error while fetching theatres:', err);
        res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send('Internal Server Error');
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const screenId = req.params.id;

        const screen = await Screen.findOne({ _id: screenId, isActive: true });
        if (!screen) {
            return res.json({
                message: 'Screen not found',
                status: HTTP_STATUS_CODES.NOT_FOUND,
                data: null
            });
        }

        const showTimes = await ShowTime.find({ screenId: screen._id, isActive: true });

        // Include showTimes in the screen object
        screen._doc.showTimes = showTimes;

        res.json({
            message: 'Record found',
            status: HTTP_STATUS_CODES.OK,
            data: screen
        });
    } catch (err) {
        console.error('Error while fetching screen:', err);
        res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send('Internal Server Error');
    }
});

// router.post('/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const payload = req.body;
//         if (payload.seats) {
//             payload.seats = JSON.stringify(payload.seats);
//         }
//         if (id) {
//             await Screen.findByIdAndUpdate(id, payload);
//             res.json({ message: "Record updated", status: HTTP_STATUS_CODES.OK });
//         } else {
//             res.status(500).send('screenId is required!!!');
//         }
//     } catch (error) {
//         console.error('Error while updating a screen:', error);
//         res.status(500).send('Internal Server Error');
//     }
// })

// router.post('/delete/:id', async (req, res) => {
//     try {
//         if (req.params.id) {
//             await Screen.findByIdAndUpdate(req.params.id, { isActive: false });
//             res.json({ message: "Record deleted", status: HTTP_STATUS_CODES.OK });
//         } else {
//             res.status(500).send('screenId is required!!!');
//         }
//     } catch (error) {
//         console.error('Error while deleting a screen:', error);
//         res.status(500).send('Internal Server Error');
//     }
// })
module.exports = router;