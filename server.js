// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const db = require('./models')
const testRoutes = require ('./routes/test')

const app = express();
const PORT = process.env.PORT || 3000;

// configurations
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// db sync/refresh, uncomment to refresh db
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("db has been re sync")
// })

app.use('/api', testRoutes)

// server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))