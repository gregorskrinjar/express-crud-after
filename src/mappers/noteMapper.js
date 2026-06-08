const NoteDto = require('../dto/noteDto');

function toDto(note) {
  if (!note) {
    return null;
  }

  return new NoteDto(note);
}

function toDtoList(notes) {
  return notes.map(toDto);
}

module.exports = {
  toDto,
  toDtoList
};
