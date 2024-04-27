const db = require("../database/models/index");
const Prospect = db.Prospect;
const liveSession = db.LiveSession;
const Event = db.Event;

module.exports = {
  getAllProspects,
  index,
  create
};

// postman testing
async function getAllProspects(req, res) {
  try {
    const prospects = await Prospect.find();
    res.json(prospects);
  } catch (error) {
    console.error("Error fetching tests:", error);
    res.status(500).json({ error: "Could not fetch prospects." });
  }
}


async function index(req, res) {
  try {
    const prospects = await Prospect.find();
    res.render('prospects', { prospects });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Could not fetch prospects." });
  }
}


async function create(req, res) {
  try {
    // eventId = parseInt(eventId)
    const newProspect = await Prospect.create(req.body);
    // const event = await Event.findByPk(eventId) ? eventId : await Event.findOne() 
    // newProspect.addEvent(event)
    
    return res.redirect('/events');
  } catch (error) {
    console.error("Error creating prospect:", error);
    res.status(500).json({ error: "Could not create prospect." });
  }
}