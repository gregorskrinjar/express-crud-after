class VehicleService {
  constructor(vehicleRepository, customerRepository, mapper, errorFactory) {
    this.vehicleRepository = vehicleRepository;
    this.customerRepository = customerRepository;
    this.mapper = mapper;
    this.errorFactory = errorFactory;
  }

  ensureCustomerExists(customerId) {
    const customer = this.customerRepository.findById(customerId);

    if (!customer) {
      throw this.errorFactory.badRequest('Vehicle must be assigned to an existing customer');
    }
  }

  getAllVehicles() {
    return this.mapper.toDtoList(this.vehicleRepository.findAll());
  }

  getVehicleById(id) {
    const vehicle = this.vehicleRepository.findById(id);

    if (!vehicle) {
      throw this.errorFactory.notFound('Vehicle');
    }

    return this.mapper.toDto(vehicle);
  }

  createVehicle(vehicleData) {
    this.ensureCustomerExists(vehicleData.customerId);
    const vehicle = this.vehicleRepository.create(vehicleData);
    return this.mapper.toDto(vehicle);
  }

  updateVehicle(id, vehicleData) {
    this.ensureCustomerExists(vehicleData.customerId);
    const updatedVehicle = this.vehicleRepository.update(id, vehicleData);

    if (!updatedVehicle) {
      throw this.errorFactory.notFound('Vehicle');
    }

    return this.mapper.toDto(updatedVehicle);
  }

  deleteVehicle(id) {
    const deleted = this.vehicleRepository.remove(id);

    if (!deleted) {
      throw this.errorFactory.notFound('Vehicle');
    }
  }
}

module.exports = VehicleService;
