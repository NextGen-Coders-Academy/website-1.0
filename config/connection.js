const pg = require("pg");

const dotenv = require("dotenv");

dotenv.config();

let connectionString = process.env.DATABASE_URL;

// // use a different DB if we're testing
// if (process.env.NODE_ENV === "test") {
//     connectionString = process.env.DEV_DATABASE_URL;
// }

const db = new pg.Pool({
    connectionString,
});

db.query('SELECT * FROM test', [])
    .then((results) => {
        console.log(results.rows);
    })
    .catch((error) => { console.log(error.message) });

module.exports = db;