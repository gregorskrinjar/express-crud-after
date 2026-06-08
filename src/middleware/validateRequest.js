const errorFactory = require('../factories/errorFactory');

function validateRequest(validator) {
  return (req, res, next) => {
    const errors = validator(req.body);

    if (errors.length > 0) {
      return next(errorFactory.badRequest('Validation failed', errors));
    }

    return next();
  };
}

module.exports = validateRequest;
