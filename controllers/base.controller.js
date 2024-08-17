const db = require("../database/models");
const Employee = db.Employee;
const Course = db.Course;
const Event = db.Event;
const FreqAskQuest = db.FreqAskQuest;
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
        const freqAskQuests = await FreqAskQuest.find();
        // const events = await Event.find({ limit: 1, order: [['date', 'ASC']]});
        // console.log(employees)
        res.render('index', {
            title: 'Next Gen Coders Academy | Learn to Code and Shape Your Future',
            metaDescription: 'Join Next Gen Coders Academy to master coding skills. Explore courses, events, and more to kickstart your tech career. Enroll today!',
            employees,
            courses,
            // events,
            moment,
            freqAskQuests,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Home route not working" });
    }
}

async function about(req, res) {
    try {
        res.render('about', {
            title: "About Us | Next Gen Coders Academy",
            metaDescription: "Learn about Next Gen Coders Academy, our mission, and how we're empowering the next generation of tech leaders. Discover our story, values, and the team behind the academy.",    
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "About route not working" });
    }
}

async function reqInfo(req, res) {
    try {
        res.render('reqinfo/index', {
            title: "Request More Information | Next Gen Coders Academy",
            metaDescription: "Need more details about our courses? Request information today and learn how Next Gen Coders Academy can help you achieve your goals.",
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Req Info route not working" });
    }
}

async function notFound(req, res) {
    try {
        res.render('404', {
            title: "Page Not Found | Next Gen Coders Academy",
            metaDescription: "Oops! The page you're looking for doesn't exist. Explore our courses and events to continue your coding journey at Next Gen Coders Academy.",
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: "404 route not working" });
    }
}