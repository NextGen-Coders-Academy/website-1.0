const mongoose = require('mongoose');

const freqAskQuestSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
},{
    timestamps: true
})

const FreqAskQuest = mongoose.model('FreqAskQuest', freqAskQuestSchema);

module.exports = FreqAskQuest;