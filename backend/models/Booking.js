const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tour_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
    date: { type: Date },
    total_price: { type: Number },
});

module.exports = mongoose.model('Booking', bookingSchema);
