const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  isPresent: {
    type: Boolean,
    default: false
  },
  prospect: {type: mongoose.Types.ObjectId, ref: 'prospect'}
},
{
  timestamps: true
}
)

const LiveSession = mongoose.model('session', sessionSchema);

module.exports = LiveSession