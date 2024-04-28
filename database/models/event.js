const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: String,
  zoomLink: String,
  recordedLink: String,
  recordedPassword: String,
},{
  timestamps: true
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;