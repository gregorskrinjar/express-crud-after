class SearchService {
  constructor(customerRepository, customerMapper, errorFactory) {
    this.customerRepository = customerRepository;
    this.customerMapper = customerMapper;
    this.errorFactory = errorFactory;
  }

  searchCustomers(query) {
    if (!query || !query.trim()) {
      throw this.errorFactory.badRequest('Search query is required');
    }

    const customers = this.customerRepository.searchByName(query.trim());
    return this.customerMapper.toDtoList(customers);
  }
}

module.exports = SearchService;
