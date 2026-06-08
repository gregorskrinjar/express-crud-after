function validateNotePayload(body) {
  const errors = [];

  if (!body.customerId) errors.push('customerId is required');
  if (!body.content) errors.push('content is required');

  if (body.customerId && Number.isNaN(Number(body.customerId))) {
    errors.push('customerId must be a number');
  }

  return errors;
}

module.exports = {
  validateNotePayload
};
