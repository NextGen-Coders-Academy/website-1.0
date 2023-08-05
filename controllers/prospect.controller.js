const db = require("../database/models/index");
const Prospect = db.prospects;

async function getAllProspects(req, res) {
  try {
    const prospects = await Prospect.findAll();
    res.json(prospects);
    console.log(prospects)
  } catch (error) {
    console.error("Error fetching tests:", error);
    res.status(500).json({ error: "Could not fetch prospects." });
  }
}


async function prospectIndex(req, res) {
  try {
    const prospects = await Prospect.findAll();
    console.log(prospects)
    res.render('prospects', {prospects: prospects});
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Could not fetch prospects." });
  }
}


async function createProspect(req, res) {
  try {
    const { firstName, lastName, email, location, bio, status } = req.body;
    const newProspect = await Prospect.create({ firstName, lastName, email, location, bio, status });
    res.status(201).json(newProspect);
  } catch (error) {
    console.error("Error creating prospect:", error);
    res.status(500).json({ error: "Could not create prospect." });
  }
}

module.exports = {
  // createTest,
  prospectIndex,
  getAllProspects,
  createProspect
};
