const VehicleDto = require('../dto/vehicleDto');

function toDto(vehicle) {
  if (!vehicle) {
    return null;
  }

  return new VehicleDto(vehicle);
}

function toDtoList(vehicles) {
  return vehicles.map(toDto);
}

module.exports = {
  toDto,
  toDtoList
};
