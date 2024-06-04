const db = require("../database/models");
const Event = db.Event;
const moment = require('moment'); // datetime conversion for ejs

module.exports = {
    getAllEvents,
    index,
    show,
};

// postman testing
async function getAllEvents(req, res) {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        console.error("Error fetching tests:", error);
        res.status(500).json({ error: "Could not fetch events." });
    }
}

async function index(req, res) {
    try {
        const events = await Event.find();
        res.render('events/index', { events, moment });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Could not fetch events." });
    }
}

async function show(req, res) {
    try {
        const id = req.params.id;
        const event = await Event.findById(id);
        res.render('events/show', { 
            event,
            moment 
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: "Event ID not found" });
    }
}