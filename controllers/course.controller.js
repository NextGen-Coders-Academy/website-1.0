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
    // console.log(courses)
    res.send(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Could not fetch courses." });
  }
}

async function index(req, res) {
  try {
    const courses = await Course.find();
    
    res.render('courses/index', { 
      courses, 
      moment,
      title: "Explore Coding Courses | Next Gen Coders Academy",
      metaDescription: "Browse our coding courses at Next Gen Coders Academy. Learn programming languages and gain hands-on experience. Start learning now!",
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Could not fetch courses." });
  }
}

async function show(req, res) {
  try {
    const id = req.params.id;
    // console.log(id)
    const course = await Course.findById(id);
    
    const courseTitle = course.name ? 
      `${course.name} | NextGen Coders Academy` : 
      "Sign up now! | NextGen Coders Academy"
    
    const courseMetaDescription = course.name ? 
      `Enroll in ${course.name} at Next Gen Coders Academy. Master web development and advance your programming career.` : 
      "Enroll at Next Gen Coders Academy. Master web development and advance your programming career."

    res.render('courses/show', { 
      course,
      moment,
      title: courseTitle,
      metaDescription: courseMetaDescription,
    });
  } catch (error) {
    console.log(error)
    res.render('404');
  }
}
