const CustomerDto = require('../dto/customerDto');

function toDto(customer) {
  if (!customer) {
    return null;
  }

  return new CustomerDto(customer);
}

function toDtoList(customers) {
  return customers.map(toDto);
}

module.exports = {
  toDto,
  toDtoList
};
