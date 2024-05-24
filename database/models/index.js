// This connects the config file that links MongoDB and Mongoose to the rules for each of the dbs we create
require('../../config/connection');

module.exports = {
    Course: require('./course'),
    Employee: require('./employee'),
    Enrollment: require('./enrollment'),
    Event: require('./event'),
    FreqAskQuest: require('./freqAskQuest'),
    LiveSession: require('./session'),
    Prospect: require('./prospect'),
    Recording: require('./recording'),
    Student: require('./student'),
    User: require('./user')
}