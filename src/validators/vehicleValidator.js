function validateVehiclePayload(body) {
  const errors = [];

  if (!body.brand) errors.push('brand is required');
  if (!body.model) errors.push('model is required');
  if (!body.vin) errors.push('vin is required');
  if (!body.registrationNumber) errors.push('registrationNumber is required');
  if (!body.vehicleType) errors.push('vehicleType is required');
  if (!body.customerId) errors.push('customerId is required');
  if (!body.year) errors.push('year is required');

  if (body.year && Number.isNaN(Number(body.year))) {
    errors.push('year must be a number');
  }

  if (body.customerId && Number.isNaN(Number(body.customerId))) {
    errors.push('customerId must be a number');
  }

  return errors;
}

module.exports = {
  validateVehiclePayload
};
