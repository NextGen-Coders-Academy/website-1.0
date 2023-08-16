const db = require("../database/models/index");
const Student = db.Student;
const Enrollment = db.Enrollment;
const Course = db.Course;

module.exports = {
  getAllStudents,
  getAll,
  create
};

// postman testing
async function getAllStudents(req, res) {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    console.error("Error fetching tests:", error);
    res.status(500).json({ error: "Could not fetch prospects." });
  }
}


async function getAll(req, res) {
  try {
    const students = await Student.findAll();
    res.render('students', { students });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Could not fetch students." });
  }
}


async function create(req, res) {
  try {
    const { firstName, lastName, email, location, bio } = req.body;
    let { courseId } = req.body;
    courseId = parseInt(courseId)
    const newStudent = await Student.create({ firstName, lastName, email, location, bio });
    const course = await Course.findByPk(courseId);
    newStudent.addCourse(course)
    
    return res.redirect('/courses');
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Could not create student." });
  }
}