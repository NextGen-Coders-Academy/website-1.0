const db = require("../database/models");
const Course = db.Course;

module.exports = {
  getAllCourses,
  getAll,
  getOne
};

// postman testing
async function getAllCourses(req, res) {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Could not fetch courses." });
  }
}

async function getAll(req, res) {
  try {
    const courses = await Course.findAll();

    res.render('courses/index', { courses });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Could not fetch courses." });
  }
}

async function getOne(req, res) {
    try {
        const id = req.params.id;
        const course = await Course.findByPk(id);
        res.render('courses/show', { 
            course,
            moment 
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: "Course ID not found" });
    }
}