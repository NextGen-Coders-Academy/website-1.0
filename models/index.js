const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {dialect: "postgres"})


sequelize.authenticate().then(() => {
    console.log(`Database connected to discover`)
}).catch((err) => {
    console.log(err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.test = require('./Test') (sequelize, DataTypes)

module.exports = db
