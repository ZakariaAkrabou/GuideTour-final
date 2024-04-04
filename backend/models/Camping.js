const mongoose = require('mongoose');

const campingSchema = new mongoose.Schema({
    
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
    duration: { type: Date, required: true },
    group_member: { type: Number, required: true },
    isPrivate: { type: Boolean, required: true },
});

module.exports = mongoose.model('Camping', campingSchema);
