class VehicleDto {
  constructor({ id, customerId, brand, model, vin, registrationNumber, vehicleType, year }) {
    this.id = id;
    this.customerId = customerId;
    this.brand = brand;
    this.model = model;
    this.vin = vin;
    this.registrationNumber = registrationNumber;
    this.vehicleType = vehicleType;
    this.year = year;
  }
}

module.exports = VehicleDto;
