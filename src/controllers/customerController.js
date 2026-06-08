const { customerService, searchService } = require('../config/container');
const responseFactory = require('../factories/responseFactory');
const httpStatus = require('../utils/httpStatus');

function getAllCustomers(req, res, next) {
  try {
    const customers = customerService.getAllCustomers();
    res.status(httpStatus.OK).json(responseFactory.success(customers));
  } catch (error) {
    next(error);
  }
}

function getCustomerById(req, res, next) {
  try {
    const customer = customerService.getCustomerById(req.params.id);
    res.status(httpStatus.OK).json(responseFactory.success(customer));
  } catch (error) {
    next(error);
  }
}

function searchCustomers(req, res, next) {
  try {
    const customers = searchService.searchCustomers(req.query.query);
    res.status(httpStatus.OK).json(responseFactory.success(customers));
  } catch (error) {
    next(error);
  }
}

function createCustomer(req, res, next) {
  try {
    const customer = customerService.createCustomer(req.body);
    res.status(httpStatus.CREATED).json(responseFactory.created(customer));
  } catch (error) {
    next(error);
  }
}

function updateCustomer(req, res, next) {
  try {
    const customer = customerService.updateCustomer(req.params.id, req.body);
    res.status(httpStatus.OK).json(responseFactory.success(customer));
  } catch (error) {
    next(error);
  }
}

function deleteCustomer(req, res, next) {
  try {
    customerService.deleteCustomer(req.params.id);
    res.status(httpStatus.OK).json(responseFactory.deleted());
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  searchCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer
};
