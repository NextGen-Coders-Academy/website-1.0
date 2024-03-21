const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');

const courseSchema = new mongoose.Schema({
  firstName: {
    type: String,
  }, lastName: {
    type: String,
  }, 
  description: {
    type: String,
    default: ""
  }, startDate: {
    type: Date,
    default: Date.now()
  }, endDate: {
    type: Date,
    default: Date.now() + (24 * 7 * 13)
  }, hours: {
    type: INTEGER,
    default: 13 * 5 * 8
  },
  isHidden: {
    type: Boolean,
    default: false
  }}, {
    timestamps: true
  }
);

const Courses = mongoose.model('Courses', courseSchema);

module.exports = Courses;  