const db = require("../database/models/index");
const Student = db.Student;
const Enrollment = db.Enrollment;
const Course = db.Course;

module.exports = {
  getAllStudents,
  index,
  create
};

// postman testing
async function getAllStudents(req, res) {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error("Error fetching tests:", error);
    res.status(500).json({ error: "Could not fetch prospects." });
  }
}


async function index(req, res) {
  try {
    const students = await Student.find();
    res.render('students', { students });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Could not fetch students." });
  }
}


async function create(req, res) {
  try {
    const newStudent = await Student.create(req.body);
    // const course = await Course.findByPk(courseId) ? courseId : await Course.findOne() 
    return res.redirect('/courses');
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Could not create student."});
  }
}