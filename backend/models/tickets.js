const mongoose = require('mongoose');


const ticketSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    movieId: {
        type: String,
        required: true
    },
    screenId: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    showTime: {
        type: Date,
        default: Date.now
    },
    showTimeId: {
        type: String,
        required: true

    },
    seats: {
        type: String,
        required: true
    },
    numberOfSeats: {
        type: Number,
        required: true
    },
    qrUrls: {
        type: [String], // Change the type to string
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
});


const TicketModel = mongoose.model('tickets', ticketSchema);

module.exports = TicketModel;