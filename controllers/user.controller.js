const db = require("../database/models/index");
const User = db.User;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

require('dotenv').config();

module.exports = {
    register,
    login,
    logout
  };

async function register(req, res, next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(req.body.password, salt);
  
        req.body.password = passwordHash;

        const newUser = await User.create(req.body);

        const token = jwt.sign({ 
            id: newUser._id, 
            email: newUser.email}, 
            process.env.SECRET_JWT_CODE
        )
        res.cookie('SessionID', token)
        return res.status(201).send({user: req.body.email, token: token})
        
        //   return res.redirect('/');
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Could not create user." });
    }
}

async function login(req, res, next) {
    if (!req.body.email || !req.body.password) {
        res.status(400).send({success: false, error: 'Missing parameters'})

    }
    try {
        const user = await User.findOne({ email: req.body.email })

        // missing params
        if (!user) {
            res.status(404).send({success: false, error: 'User not found'})
        }
        
        // password match
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        const token = jwt.sign({ 
            id: user._id, 
            email: user.email}, 
            process.env.SECRET_JWT_CODE
        )
        res.cookie('SessionID', token)
        res.status(201).send({user: req.body.email, token: token})
    } catch (error) {
        
    }
}

async function logout(req, res, next) {
    try {
        res.setHeader('Clear-Site-Data', '"cookies"');
        res.status(200).json({ message: 'You are logged out!' });
    } catch (error) {
        res.send({message: 'logout failed'})
    }
}

