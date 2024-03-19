const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
});

module.exports = mongoose.model('Payment', paymentSchema);
