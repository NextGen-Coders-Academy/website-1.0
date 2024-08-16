const db = require("../database/models");
const Course = db.Course;
const moment = require('moment'); // datetime conversion for ejs
const { sendSignupEmails } = require("../config/emailLogic");

module.exports = {
  apiCourses,
  index,
  show,
  submitSignupForm,
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
  const id = req.params.id;
  console.log('Request body:', req.body);
  
  try {
    const course = await Course.findById(id);
    
    const courseTitle = course.name ? 
      `${course.name} | NextGen Coders Academy` : 
      "Sign up now! | NextGen Coders Academy"
    
    const courseMetaDescription = course.name ? 
      `Enroll in ${course.name} at Next Gen Coders Academy. Master web development and advance your programming career.` : 
      "Enroll at NextGen Coders Academy. Master web development and advance your programming career."
    
    res.render('courses/show', { 
      course,
      moment,
      title: courseTitle,
      metaDescription: courseMetaDescription,
    });

  } catch (error) {
    console.log(error)
    if(error){
      res.status(500).render('404', {
        title: "Oops! Our bad... | NextGen Coders Academy",
        metaDescription: "It looks like there was an issue registering you for the course or event. Try again!"
      });
    }
  }
}

async function submitSignupForm(req, res) {
  const courseId = req.params.id;
  
  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).render('404');
    }

    const student = {
      name: `${req.body.firstName} ${req.body.lastName}`,
      email: req.body.email,
    };

    const teacher = { 
      name: 'Eric Fithian', 
      email: 'ericfithian25@gmail.com', 
    };

    sendSignupEmails(student, teacher, course);
    res.status(200).render('courses/show', { 
      course,
      moment,
      title: `${course.name} | NextGen Coders Academy`,
      metaDescription: "Success! You're on your way to mastering web development and advancing your programming career!",
    });
  } catch (error) {
    console.error('Error during form submission:', error);
    res.status(500).send('Error during signup, please try again.');
  }
}