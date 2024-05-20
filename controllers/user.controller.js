const db = require("../database/models/index");
const User = db.User;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

require('dotenv').config();

module.exports = {
    create
  };

async function create(req, res, next) {
    try {
        console.log(req.body)
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(req.body.password, salt);
  
        req.body.password = passwordHash;

        const newUser = await User.create(req.body);

        const token = jwt.sign({ id: newUser._id, email: newUser.email}, process.env.SECRET_JWT_CODE)

        res.status(201).send({user: req.body.user, token: token})
        
        //   return res.redirect('/');
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Could not create user." });
    }
}