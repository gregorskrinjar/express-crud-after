const httpStatus = require('../utils/httpStatus');

function createError(statusCode, message, details = null) {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.details = details;
  return error;
}

function badRequest(message, details = null) {
  return createError(httpStatus.BAD_REQUEST, message, details);
}

function notFound(resourceName) {
  return createError(httpStatus.NOT_FOUND, `${resourceName} not found`);
}

function internal(message = 'Internal server error') {
  return createError(httpStatus.INTERNAL_SERVER_ERROR, message);
}

module.exports = {
  createError,
  badRequest,
  notFound,
  internal
};
