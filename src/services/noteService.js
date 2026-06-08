class NoteService {
  constructor(noteRepository, customerRepository, mapper, errorFactory) {
    this.noteRepository = noteRepository;
    this.customerRepository = customerRepository;
    this.mapper = mapper;
    this.errorFactory = errorFactory;
  }

  ensureCustomerExists(customerId) {
    const customer = this.customerRepository.findById(customerId);

    if (!customer) {
      throw this.errorFactory.badRequest('Note must be assigned to an existing customer');
    }
  }

  getAllNotes() {
    return this.mapper.toDtoList(this.noteRepository.findAll());
  }

  getNoteById(id) {
    const note = this.noteRepository.findById(id);

    if (!note) {
      throw this.errorFactory.notFound('Note');
    }

    return this.mapper.toDto(note);
  }

  getNotesByCustomerId(customerId) {
    this.ensureCustomerExists(customerId);
    return this.mapper.toDtoList(this.noteRepository.findByCustomerId(customerId));
  }

  createNote(noteData) {
    this.ensureCustomerExists(noteData.customerId);
    const note = this.noteRepository.create(noteData);
    return this.mapper.toDto(note);
  }

  updateNote(id, noteData) {
    this.ensureCustomerExists(noteData.customerId);
    const updatedNote = this.noteRepository.update(id, noteData);

    if (!updatedNote) {
      throw this.errorFactory.notFound('Note');
    }

    return this.mapper.toDto(updatedNote);
  }

  deleteNote(id) {
    const deleted = this.noteRepository.remove(id);

    if (!deleted) {
      throw this.errorFactory.notFound('Note');
    }
  }
}

module.exports = NoteService;
