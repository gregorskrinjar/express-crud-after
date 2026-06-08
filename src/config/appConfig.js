const appConfig = {
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',
  apiPrefix: '',
  requestLogging: process.env.REQUEST_LOGGING !== 'false'
};

module.exports = appConfig;
