// 3rd party libraries
const mongoose = require('mongoose');

// configure mongoose
mongoose.Promise = global.Promise;

// connect to the database
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

module.exports = mongoose;