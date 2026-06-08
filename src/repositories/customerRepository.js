const customers = require('../data/customers');
const { generateNextId } = require('../utils/idGenerator');

class CustomerRepository {
  constructor(dataSource = customers) {
    this.customers = dataSource;
  }

  findAll() {
    return this.customers;
  }

  findById(id) {
    return this.customers.find((customer) => customer.id === Number(id)) || null;
  }

  searchByName(query) {
    const normalizedQuery = query.toLowerCase();

    return this.customers.filter((customer) => (
      customer.firstName.toLowerCase().includes(normalizedQuery)
      || customer.lastName.toLowerCase().includes(normalizedQuery)
    ));
  }

  create(customerData) {
    const newCustomer = {
      id: generateNextId(this.customers),
      ...customerData,
      createdAt: new Date().toISOString()
    };

    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id, customerData) {
    const customerIndex = this.customers.findIndex((customer) => customer.id === Number(id));

    if (customerIndex === -1) {
      return null;
    }

    this.customers[customerIndex] = {
      ...this.customers[customerIndex],
      ...customerData,
      id: Number(id)
    };

    return this.customers[customerIndex];
  }

  remove(id) {
    const customerIndex = this.customers.findIndex((customer) => customer.id === Number(id));

    if (customerIndex === -1) {
      return false;
    }

    this.customers.splice(customerIndex, 1);
    return true;
  }
}

module.exports = CustomerRepository;
