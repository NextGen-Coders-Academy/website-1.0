const mongoose = require('mongoose');

const recordingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: String,
    link: String,
    password: String,
},{
    timestamps: true
})

const Recording = mongoose.model('Recording', recordingSchema);

module.exports = Recording;