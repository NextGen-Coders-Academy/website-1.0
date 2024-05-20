const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    toJSON: {
        virtuals: true,
        // ret is the returned Mongoose document
        transform: (_doc, ret) => {
            delete ret.password;
            return ret;
        },
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User