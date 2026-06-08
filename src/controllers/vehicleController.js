const { vehicleService } = require('../config/container');
const responseFactory = require('../factories/responseFactory');
const httpStatus = require('../utils/httpStatus');

function getAllVehicles(req, res, next) {
  try {
    const vehicles = vehicleService.getAllVehicles();
    res.status(httpStatus.OK).json(responseFactory.success(vehicles));
  } catch (error) {
    next(error);
  }
}

function getVehicleById(req, res, next) {
  try {
    const vehicle = vehicleService.getVehicleById(req.params.id);
    res.status(httpStatus.OK).json(responseFactory.success(vehicle));
  } catch (error) {
    next(error);
  }
}

function createVehicle(req, res, next) {
  try {
    const vehicle = vehicleService.createVehicle(req.body);
    res.status(httpStatus.CREATED).json(responseFactory.created(vehicle));
  } catch (error) {
    next(error);
  }
}

function updateVehicle(req, res, next) {
  try {
    const vehicle = vehicleService.updateVehicle(req.params.id, req.body);
    res.status(httpStatus.OK).json(responseFactory.success(vehicle));
  } catch (error) {
    next(error);
  }
}

function deleteVehicle(req, res, next) {
  try {
    vehicleService.deleteVehicle(req.params.id);
    res.status(httpStatus.OK).json(responseFactory.deleted());
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle
};
