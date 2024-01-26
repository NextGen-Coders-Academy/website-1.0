const mongoose = require('mongoose');
// const schema = new mongoose.Schema

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "employee must have a first name"]
  }, lastName: {
    type: String,
    required: [true, "employee must have a last name"]
  }, 
  title: {
    type: String,
    default: "Instructor"
  }, bio: {
    type: String,
    default: "Currently works as an instructor here"
  }, 
  image: String,
  startDate: {
    type: Date,
    required: [true, "please enter a start date"]
  }, endDate: {
    type: Date,
    required: [true, "please enter an end date"]
  },
  isHidden: {
    type: Boolean,
    default: true
  }}, {
    timestamps: true
  }
);

// mongoose.model(<mongodb collection name>, our schema) is the general default and it creates a collection inside of MongoDB that is named from the first argument, Musicians here. And it applies the schema above to that collection.
const Employees = mongoose.model('Employee', employeeSchema);

module.exports = Employees;  

      // Employee.belongsToMany(models.Course
