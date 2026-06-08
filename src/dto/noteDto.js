class NoteDto {
  constructor({ id, customerId, content }) {
    this.id = id;
    this.customerId = customerId;
    this.content = content;
  }
}

module.exports = NoteDto;
