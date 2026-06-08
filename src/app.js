const express = require('express');
const customerRoutes = require('./routes/customerRoutes');
const noteRoutes = require('./routes/noteRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const requestLogger = require('./middleware/requestLogger');
const errorHandler = require('./middleware/errorHandler');
const errorFactory = require('./factories/errorFactory');

const app = express();

app.use(express.json());
app.use(requestLogger);

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Express CRUD API after introducing design patterns'
  });
});

app.use('/customers', customerRoutes);
app.use('/notes', noteRoutes);
app.use('/vehicles', vehicleRoutes);

app.use((req, res, next) => {
  next(errorFactory.notFound('Route'));
});

app.use(errorHandler);

module.exports = app;
