const db = require("../database/models");
const FreqAskQuest = db.FreqAskQuest;

module.exports = {
    index,
};

async function index(req, res) {
    try {
        const freqAskQuests = await FreqAskQuest.find();
        res.render('about/about', { 
            freqAskQuests,
            title: 'Next Gen Coders Academy | Learn to Code and Shape Your Future',
            metaDescription: 'Join Next Gen Coders Academy to master coding skills. Explore courses, events, and more to kickstart your tech career. Enroll today!'
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Could not fetch frequently asked questions." });
    }
}
