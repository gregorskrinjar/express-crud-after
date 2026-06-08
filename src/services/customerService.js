class CustomerService {
  constructor(repository, mapper, errorFactory) {
    this.repository = repository;
    this.mapper = mapper;
    this.errorFactory = errorFactory;
  }

  getAllCustomers() {
    return this.mapper.toDtoList(this.repository.findAll());
  }

  getCustomerById(id) {
    const customer = this.repository.findById(id);

    if (!customer) {
      throw this.errorFactory.notFound('Customer');
    }

    return this.mapper.toDto(customer);
  }

  createCustomer(customerData) {
    const customer = this.repository.create(customerData);
    return this.mapper.toDto(customer);
  }

  updateCustomer(id, customerData) {
    const updatedCustomer = this.repository.update(id, customerData);

    if (!updatedCustomer) {
      throw this.errorFactory.notFound('Customer');
    }

    return this.mapper.toDto(updatedCustomer);
  }

  deleteCustomer(id) {
    const deleted = this.repository.remove(id);

    if (!deleted) {
      throw this.errorFactory.notFound('Customer');
    }
  }
}

module.exports = CustomerService;
