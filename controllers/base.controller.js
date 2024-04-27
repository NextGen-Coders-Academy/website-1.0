const db = require("../database/models");
const Employee = db.Employee;
const Course = db.Course;
const Event = db.Event;
const moment = require('moment'); // datetime conversion for ejs

module.exports = {
    home,
    about,
    notFound
}                                          

async function home(req, res) {
    try {
        const employees = await Employee.find();
        const courses = await Course.find();
        // const events = await Event.find({ limit: 1, order: [['date', 'ASC']]});
        res.render('home/index', {
            employees,
            courses,
            // events,
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

async function notFound(req, res) {
    try {
        res.render('404');
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: "404 route not working" });
    }
}