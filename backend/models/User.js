const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    country: { type: String, required: true },
    role: { type: String, enum: ['user', 'guide', 'admin'], default: 'user' },
    forgotPasswordToken: { type: String, default: null },
    isConfirmed: { type: Boolean, default: false },
    confirmationToken: { type: String, default: null }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
