const db = require("../database/models");
const Employee = db.Employee;
const Course = db.Course;
const Event = db.Event;
const moment = require('moment'); // datetime conversion for ejs

module.exports = {
    home,
    about
}

async function home(req, res) {
    try {
        const employees = await Employee.findAll();
        const courses = await Course.findAll();
        const events = await Event.findAll({ limit: 1, order: [['date', 'ASC']]});
        res.render('home', {
            employees,
            courses,
            events,
            moment,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Home route not working" });
    }
}

async function about(req, res) {
    try {
        res.render('about');
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "About route not working" });
    }
}