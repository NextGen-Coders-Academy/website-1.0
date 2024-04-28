const mongoose = require('mongoose');

const liveSessionSchema = new mongoose.Schema({
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

const LiveSession = mongoose.model('liveSession', liveSessionSchema);

module.exports = LiveSession