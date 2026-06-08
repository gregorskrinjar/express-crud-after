const CustomerRepository = require('../repositories/customerRepository');
const VehicleRepository = require('../repositories/vehicleRepository');
const CustomerService = require('../services/customerService');
const VehicleService = require('../services/vehicleService');
const SearchService = require('../services/searchService');
const customerMapper = require('../mappers/customerMapper');
const vehicleMapper = require('../mappers/vehicleMapper');
const errorFactory = require('../factories/errorFactory');

const customerRepository = new CustomerRepository();
const vehicleRepository = new VehicleRepository();

const customerService = new CustomerService(
  customerRepository,
  customerMapper,
  errorFactory
);

const vehicleService = new VehicleService(
  vehicleRepository,
  customerRepository,
  vehicleMapper,
  errorFactory
);

const searchService = new SearchService(
  customerRepository,
  customerMapper,
  errorFactory
);

module.exports = {
  customerRepository,
  vehicleRepository,
  customerService,
  vehicleService,
  searchService
};
