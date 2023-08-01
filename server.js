// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");

const app = express();
const sequelize = require('./config/db.js')
const PORT = process.env.PORT || 3000;

// configurations
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));
app.use(bodyParser.json());

const startServer = () => {
    const server = app.listen(PORT, () =>
      console.log(`Listening on ${PORT}`))
      }
    ;(async () => {
      await sequelize.sync()
        console.log('db sync')
      })(startServer())