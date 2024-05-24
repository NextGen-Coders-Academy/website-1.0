const db = require("../database/models");
const FreqAskQuest = db.FreqAskQuest;

module.exports = {
    index,
};

async function index(req, res) {
    try {
        const freqAskQuests = await FreqAskQuest.find();
        res.render('about', { freqAskQuests });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Could not fetch frequently asked questions." });
    }
}
