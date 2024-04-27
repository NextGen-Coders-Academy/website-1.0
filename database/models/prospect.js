const mongoose = require('mongoose');

const prospectSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Student must have first name"]
  },
  lastName: {
    type: String,
    required: [true, "Student must have last name"]
  },
  email: {
    type: String,
    required: [true, "Student must have email"]
  },
  location: String,
  bio: String,
  status: {
    type: String,
    enum: ['prospect', 'student']
  }
},
{
  timestamps: true
})

const Prospect = mongoose.model('Prospect', prospectSchema);

module.exports = Prospect