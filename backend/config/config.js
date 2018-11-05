// get current env mode
const env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'testing') {
    const config = require('./env.json');

    // get only the configuration of the current mode
    const envConfig = config[env];

    // set env variables in the running process
    for (const key of Object.keys(envConfig)) {
        process.env[key] = envConfig[key];
    }
}

module.exports = env;