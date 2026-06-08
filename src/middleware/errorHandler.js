const httpStatus = require('../utils/httpStatus');

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal server error',
    details: err.details || null
  });
}

module.exports = errorHandler;
