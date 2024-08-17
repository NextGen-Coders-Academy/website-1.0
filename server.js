// I need to have express and then invoke it as app per the documentation
const express = require('express');
const path = require('path');
const app = express();

// For the commit
// This is bringing in the exports from my musicians controller
const { aboutController, baseController, courseController, employeeController, eventController, prospectController, recordingController, studentController, userController } = require('./controllers');
const methodOverride = require('method-override');

const cookieParser = require('cookie-parser');
const session = require("express-session");
const MongoStore = require("connect-mongo");
require('dotenv').config();

// START OF MIDDLEWARE!!! 

// Make sure the middleware is finished before reading the routes. Otherwise, the routes won't have the information they need

// This is setting up that ejs will be used in this project and it will be set to a directory named views. The directory has to be named views.
app.set('view engine', 'ejs');

// I now also want to make sure I connect this to the CSS files and any DOM manipulation.
app.use(express.static('public'));

// Forms do not come in the way I would want them to normally. I need to make sure I parse the information so that it works alongside EJS. Parses the information in express into something that will be in the req.body
// You can also npm i body-parser and then invoke it and do the same
app.use(express.urlencoded({ extended: false }));

// This is method override. This allows us to go and override what a form normally wants to do. A form with this allows us with a ? and then an _method= to set it to either update or delete on the submission of the form
app.use(methodOverride('_method'));

app.use(cookieParser());
app.use(
    session({
        // where to store the sessions in mongodb
        store: MongoStore.create({ mongoUrl: process.env.MONGO_DB_URI }),
        // secret key is used to sign every cookie to say its is valid
        secret: process.env.SECRET_JWT_CODE,
        resave: false,
        saveUninitialized: false,
        // configure the experation of the cookie
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // one week
        },
    })
);

// End of middleware and the start of my routes

// I want to make sure that I can have a generic home route first but I also want my musicians controller to be read before any * or catch all 

// app.get is saying this is a route and I'm going to be making a GET request. So basically anyone visiting my site is making a GET request.

// create user
app.post('/register', userController.register)
app.post('/login', userController.login)

// user forms
app.get('/register', userController.registerForm)
app.get('/login', userController.loginForm)
app.get('/logout', userController.logout)

// home page
app.get('/', baseController.home);

// about page
app.get('/about', aboutController.index);

// request info form page
app.get('/request-info', prospectController.index);

// all courses page
app.get('/courses', courseController.index)

// single course page
app.get('/courses/:id', courseController.show)

// all events page
app.get('/events', eventController.index)

// single event page
app.get('/events/:id', eventController.show)

// create prospect
app.post('/prospects', prospectController.create)

// all recordings page
app.get('/recordings', recordingController.index)

// single recordings page
app.get('/recordings/:id', recordingController.show)

// create student
app.post('/students', studentController.create)

// api check
app.get('/api/courses', courseController.apiCourses)

app.get('/api/employees', employeeController.apiEmployees)

// 404 page
app.get('*', baseController.notFound)

// IMPORTANT! Uncomment prod and comment 
// dev before pushing changes

// production server
app.listen(process.env.PORT, () => {});

// development server
// app.listen(4000, () => {
//     console.log("Listening on port 4000");
// });