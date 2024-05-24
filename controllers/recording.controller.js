const db = require("../database/models/index");
const Recording = db.Recording;

module.exports = {
    index,
    show
};

async function index(req, res) {
    try {
        const recordings = await Recording.find();
        res.render('recordings/index', { recordings });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Could not fetch recordings." });
    }
}

async function show(req, res) {
    try {
        const id = req.params.id;
        const event = await Recording.findById(id);
        res.render('recordings/show', { 
            event,
            moment 
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: "Recording ID not found" });
    }
}