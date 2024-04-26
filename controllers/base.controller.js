const db = require("../database/models");
const Employee = db.Employee;
const Course = db.Course;
const Event = db.Event;
const moment = require('moment'); // datetime conversion for ejs

module.exports = {
    home,
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