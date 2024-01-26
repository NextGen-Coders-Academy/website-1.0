const mongoose = require('mongoose');
// const schema = new mongoose.Schema

const courseSchema = new mongoose.Schema({
      name: {
        type: String,
        required: [true, "Please enter a name for the course"],
        unique: [true, "Must be a unique course name"]
      }, description: {
        type: String,
        required: [true, "Please enter a course description"]
      }, startDate: {
        type: Date,
        required: [true, "please enter a start date"]
      }, endDate: {
        type: Date,
        required: [true, "please enter an end date"]
      }, hours: {
        type: Number,
        default: 40*13
      }, isFullTime: {
        type: Boolean,
        default: true
      }, courseType: {
        type: STRING,
        default: 'online'
      }}, {
        timestamps: true
    }
);

// mongoose.model(<mongodb collection name>, our schema) is the general default and it creates a collection inside of MongoDB that is named from the first argument, Musicians here. And it applies the schema above to that collection.
const Courses = mongoose.model('Course', courseSchema);

module.exports = Courses;

    // static associate(models) {
    //   // define association here
    //   Course.belongsToMany(models.Employee, {
    //     through: models.Enrollment,
    //     as: "employees",
    //     foreignKey: "courseId"
    //   });
    //   Course.belongsToMany(models.Student, {
    //     through: models.Enrollment,
    //     as: "students",
    //     foreignKey: "courseId"
    //   });
    // }
