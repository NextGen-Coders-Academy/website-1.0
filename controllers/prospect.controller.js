const db = require("../database/models/index");
const Prospect = db.Prospect;
const liveSession = db.liveSession;
const Event = db.Event;

module.exports = {
  getAllProspects,
  getAll,
  create
};

// postman testing
async function getAllProspects(req, res) {
  try {
    const prospects = await Prospect.findAll();
    event_one = await Event.findByPk(1)
    res.json(prospects);
  } catch (error) {
    console.error("Error fetching tests:", error);
    res.status(500).json({ error: "Could not fetch prospects." });
  }
}


async function getAll(req, res) {
  try {
    const prospects = await Prospect.findAll();
    res.render('prospects', { prospects });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Could not fetch prospects." });
  }
}


async function create(req, res) {
  try {
    const { firstName, lastName, email, location, bio, status } = req.body;
    let { eventId } = req.body;
    eventId = parseInt(eventId)
    const newProspect = await Prospect.create({ firstName, lastName, email, location, bio, status });
    const event = await Event.findByPk(eventId);
    newProspect.addEvent(event)
    
    return res.redirect('/events');
  } catch (error) {
    console.error("Error creating prospect:", error);
    res.status(500).json({ error: "Could not create prospect." });
  }
}

// async function create(req, res) {
//   try {
//     const prospectId = 1
//     const eventId = 2
//     const newLiveSession = await liveSession.create({ prospectId, eventId })
    
//     console.log(newLiveSession);
//     return res.redirect('/events');
//   } catch (error) {
//     console.error("Error creating prospect:", error);
//     res.status(500).json({ error: "Could not create prospect." });
//   }
// }