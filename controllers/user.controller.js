const db = require("../database/models/index");
const User = db.User;
const Course = db.Course;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

require('dotenv').config();

module.exports = {
    register,
    login,
    registerForm,
    loginForm,
    logout,
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
        res.status(201).render('')
        const courses = await Course.find();
        
        res.render('courses/index', { 
            courses,
        });
        
        //   return res.redirect('/');
    } catch (error) {
        console.error("Error creating user:", error);
        res.render('auth/register', {message: 'registration failed'})
    }
}

async function login(req, res, next) {
    // console.log(req.body.email)
    if (!req.body.email || !req.body.password) {
        res.status(400).render('auth/login', {success: false, error: 'Missing parameters'})
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
        // res.cookie('SessionID', token)
        // res.status(201).send({user: req.body.email, token: token})
        const courses = await Course.find();
    
        res.render('courses/index', { courses });
    } catch (error) {
        res.render('auth/login', {message: 'login failed'})
    }
}

async function registerForm(req, res) {
    res.render('auth/register', {
        metaDescription: "Sign up for coding courses at Next Gen Coders Academy. Start your journey to becoming a coding expert by registering today!",
        title: "Register for Courses | NextGen Coders Academy",
    })
}

async function loginForm(req, res) {
    res.render('auth/login', {
        title: "Student Login | Next Gen Coders Academy",
        metaDescription: "Access your account at Next Gen Coders Academy. Login to view your courses, progress, and more. Continue your learning journey.",
    })
}

async function logout(req, res, next) {
    try {
        res.setHeader('Clear-Site-Data', '"cookies"');
        res.status(200).redirect('/auth/login', {
            title: "Student Login | Next Gen Coders Academy",
            metaDescription: "Access your account at Next Gen Coders Academy. Login to view your courses, progress, and more. Continue your learning journey.",
        });
    } catch (error) {
        res.send({message: 'logout failed'})
    }
}

