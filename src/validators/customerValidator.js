function validateCustomerPayload(body) {
  const errors = [];

  if (!body.firstName) errors.push('firstName is required');
  if (!body.lastName) errors.push('lastName is required');
  if (!body.email) errors.push('email is required');

  return errors;
}

module.exports = {
  validateCustomerPayload
};
