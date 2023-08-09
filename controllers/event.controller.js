const db = require("../database/models/index");
const Event = db.events;

// postman testing
async function getAllEvents(req, res) {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (error) {
        console.error("Error fetching tests:", error);
        res.status(500).json({ error: "Could not fetch events." });
    }
}

async function getAll(req, res) {
    try {
        const events = await Event.findAll();
        res.render('events/index', { events });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Could not fetch events." });
    }
}

async function getOne(req, res) {
    try {
        const id = req.params.id;
        const event = await Event.findByPk(id);
        res.render('events/show', { event });
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: "Event ID not found" });
    }
}

module.exports = {
    getAllEvents,
    getAll,
    getOne,
  };