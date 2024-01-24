const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        required: true,
        default: 10000 // Valor inicial do saldo
    }
});

module.exports = mongoose.model('User', userSchema);
