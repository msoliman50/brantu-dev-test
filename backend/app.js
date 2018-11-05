// 3rd party libraries
const express       = require('express'),
      bodyParser    = require('body-parser');

// own files
const env           = require('./config/config'),
      mongoose      = require('./database/mongoose'),
      restRouter    = require('./src/api/api-routes'); 


// create new express app and get the port
const app = express();
const port = process.env.PORT;

// configure the app
app.use(bodyParser.json());

// register api endpoints
app.use('/api', restRouter);

// bind the app to the port
app.listen(port, () => {
    console.log(`Application is up and running in the ${env} mode on port ${port}`);
});

// export the app for the unit testing
module.exports = app;


