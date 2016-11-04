const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/REACT');
const db = mongoose.connection;
// mongoose.set('debug', true);
db.on('error', console.error.bind(console, '# Mongo DB: connection error:'));

db.once('open', function() {
    console.log("Mongoose connected!");
})

//Session store config
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const sessionStore = new MongoStore({mongooseConnection: db});
module.exports = sessionStore;