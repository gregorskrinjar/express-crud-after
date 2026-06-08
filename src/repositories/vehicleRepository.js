const vehicles = require('../data/vehicles');
const { generateNextId } = require('../utils/idGenerator');

class VehicleRepository {
  constructor(dataSource = vehicles) {
    this.vehicles = dataSource;
  }

  findAll() {
    return this.vehicles;
  }

  findById(id) {
    return this.vehicles.find((vehicle) => vehicle.id === Number(id)) || null;
  }

  findByCustomerId(customerId) {
    return this.vehicles.filter((vehicle) => vehicle.customerId === Number(customerId));
  }

  create(vehicleData) {
    const newVehicle = {
      id: generateNextId(this.vehicles),
      ...vehicleData,
      customerId: Number(vehicleData.customerId),
      year: Number(vehicleData.year),
      createdAt: new Date().toISOString()
    };

    this.vehicles.push(newVehicle);
    return newVehicle;
  }

  update(id, vehicleData) {
    const vehicleIndex = this.vehicles.findIndex((vehicle) => vehicle.id === Number(id));

    if (vehicleIndex === -1) {
      return null;
    }

    this.vehicles[vehicleIndex] = {
      ...this.vehicles[vehicleIndex],
      ...vehicleData,
      id: Number(id),
      customerId: Number(vehicleData.customerId),
      year: Number(vehicleData.year)
    };

    return this.vehicles[vehicleIndex];
  }

  remove(id) {
    const vehicleIndex = this.vehicles.findIndex((vehicle) => vehicle.id === Number(id));

    if (vehicleIndex === -1) {
      return false;
    }

    this.vehicles.splice(vehicleIndex, 1);
    return true;
  }
}

module.exports = VehicleRepository;
