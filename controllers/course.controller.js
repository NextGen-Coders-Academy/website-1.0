const db = require("../database/models");
const Course = db.Course;
const moment = require('moment'); // datetime conversion for ejs

module.exports = {
  apiCourses,
  index,
  show
};

// postman testing
async function apiCourses(req, res) {
  try {
    const courses = await Course.find();
    console.log(courses)
    res.send(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Could not fetch courses." });
  }
}

async function index(req, res) {
  try {
    const courses = await Course.find();

    res.render('courses/index', { courses });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Could not fetch courses." });
  }
}

async function show(req, res) {
    try {
        const id = req.params.id;
        console.log(id)
        const course = await Course.findById(id);
        console.log(course)
        res.render('courses/show', { 
            course,
            moment 
        });
    } catch (error) {
        console.log(error)
        res.render('404');
    }
}
