const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  enrollmentDate: {
    type: Date,
    required: [true, "Enrollment must have date"]
  }, 
  certificateUrl: String,
  certificateId: String,
  isCurrent: {
    type: Boolean,
    default: false,
  }
},
{
  timestamps: true
})

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment