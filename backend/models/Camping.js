const mongoose = require('mongoose');

const campingSchema = new mongoose.Schema({
<<<<<<< HEAD
    
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
=======
    name: { type: String,required: true},
>>>>>>> 30fa2ec3fbceae0297a767b705b64d916bf62507
    location: { type: String, required: true },
    date: { type: Date, required: true },
    duration: { type: Date, required: true },
    group_member: { type: Number, required: true },
    isPrivate: { type: Boolean, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    
});



const Camping = mongoose.model('Camping', campingSchema);
module.exports = Camping;