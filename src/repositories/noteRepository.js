const notes = require('../data/notes');
const { generateNextId } = require('../utils/idGenerator');

class NoteRepository {
  constructor(dataSource = notes) {
    this.notes = dataSource;
  }

  findAll() {
    return this.notes;
  }

  findById(id) {
    return this.notes.find((note) => note.id === Number(id)) || null;
  }

  findByCustomerId(customerId) {
    return this.notes.filter((note) => note.customerId === Number(customerId));
  }

  create(noteData) {
    const timestamp = new Date().toISOString();
    const newNote = {
      id: generateNextId(this.notes),
      ...noteData,
      customerId: Number(noteData.customerId),
      createdAt: timestamp,
      updatedAt: timestamp
    };

    this.notes.push(newNote);
    return newNote;
  }

  update(id, noteData) {
    const noteIndex = this.notes.findIndex((note) => note.id === Number(id));

    if (noteIndex === -1) {
      return null;
    }

    this.notes[noteIndex] = {
      ...this.notes[noteIndex],
      ...noteData,
      id: Number(id),
      customerId: Number(noteData.customerId),
      updatedAt: new Date().toISOString()
    };

    return this.notes[noteIndex];
  }

  remove(id) {
    const noteIndex = this.notes.findIndex((note) => note.id === Number(id));

    if (noteIndex === -1) {
      return false;
    }

    this.notes.splice(noteIndex, 1);
    return true;
  }
}

module.exports = NoteRepository;
