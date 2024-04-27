const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
},
{
  timestamps: true
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student