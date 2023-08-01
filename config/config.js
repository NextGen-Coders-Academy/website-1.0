require('dotenv').config();
module.exports = {
    "secret":  process.env.SECRET,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": 5432,
    "dialect": "postgres"
}