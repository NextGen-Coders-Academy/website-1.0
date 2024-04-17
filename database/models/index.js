// This connects the config file that links MongoDB and Mongoose to the rules for each of the dbs we create
require('../../config/connection');

module.exports = {
    Course: require('./course'),
    Employee: require('./employee'),
    // Enrollment: require('./enrollment'),
    // Event: require('./enrollment'),
    // LiveSession: require('./live_session'),
    // Prospect: require('./prospect'),
    // Student: require('./student')
    // Users: require('./Users')
}