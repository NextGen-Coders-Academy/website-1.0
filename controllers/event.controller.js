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
        res.render('events/index', { 
            events, 
            moment,
            title: "Upcoming Coding Events | Next Gen Coders Academy",
            metaDescription: "Stay updated with the latest coding events and workshops. Join us at Next Gen Coders Academy and enhance your programming skills.",
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Could not fetch events." });
    }
}

async function show(req, res) {
    try {
        const id = req.params.id;
        const event = await Event.findById(id);
        const eventTitle = event.name ? 
            `${event.name} | NextGen Coders Academy` : 
            "Sign up now! | NextGen Coders Academy"
        
        const eventMetaDescription = event.name ? 
            `Don’t miss ${event.name} at Next Gen Coders Academy. Enhance your coding skills with hands-on workshops and networking opportunities.` :
            "Don’t miss this event at Next Gen Coders Academy. Enhance your coding skills with hands-on workshops and networking opportunities."
             
        res.render('events/show', { 
            event,
            moment,
            title: eventTitle,
            metaDescription: eventMetaDescription,
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: "Event ID not found" });
    }
}