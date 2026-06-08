const CustomerRepository = require('../repositories/customerRepository');
const NoteRepository = require('../repositories/noteRepository');
const VehicleRepository = require('../repositories/vehicleRepository');
const CustomerService = require('../services/customerService');
const NoteService = require('../services/noteService');
const VehicleService = require('../services/vehicleService');
const SearchService = require('../services/searchService');
const customerMapper = require('../mappers/customerMapper');
const noteMapper = require('../mappers/noteMapper');
const vehicleMapper = require('../mappers/vehicleMapper');
const errorFactory = require('../factories/errorFactory');

const customerRepository = new CustomerRepository();
const noteRepository = new NoteRepository();
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

const noteService = new NoteService(
  noteRepository,
  customerRepository,
  noteMapper,
  errorFactory
);

const searchService = new SearchService(
  customerRepository,
  customerMapper,
  errorFactory
);

module.exports = {
  customerRepository,
  noteRepository,
  vehicleRepository,
  customerService,
  noteService,
  vehicleService,
  searchService
};
