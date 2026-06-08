const appConfig = require('../config/appConfig');

function requestLogger(req, res, next) {
  if (appConfig.requestLogging) {
    console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
  }

  next();
}

module.exports = requestLogger;
