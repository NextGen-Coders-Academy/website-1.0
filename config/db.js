const { Sequelize, Model, DataTypes } = require('sequelize');

const dotenv = require("dotenv");

dotenv.config();

let connectionString = process.env.DATABASE_URL;

const sequelize = new Sequelize(connectionString);

const Test = sequelize.define('test', {
  name: DataTypes.TEXT,
});

module.exports = sequelize;