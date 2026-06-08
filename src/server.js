const app = require('./app');
const appConfig = require('./config/appConfig');

app.listen(appConfig.port, () => {
  console.log(`Server running on port ${appConfig.port} in ${appConfig.environment} mode`);
});
