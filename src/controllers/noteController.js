const { noteService } = require('../config/container');
const responseFactory = require('../factories/responseFactory');
const httpStatus = require('../utils/httpStatus');

function getAllNotes(req, res, next) {
  try {
    const notes = noteService.getAllNotes();
    res.status(httpStatus.OK).json(responseFactory.success(notes));
  } catch (error) {
    next(error);
  }
}

function getNoteById(req, res, next) {
  try {
    const note = noteService.getNoteById(req.params.id);
    res.status(httpStatus.OK).json(responseFactory.success(note));
  } catch (error) {
    next(error);
  }
}

function getNotesByCustomerId(req, res, next) {
  try {
    const notes = noteService.getNotesByCustomerId(req.params.customerId);
    res.status(httpStatus.OK).json(responseFactory.success(notes));
  } catch (error) {
    next(error);
  }
}

function createNote(req, res, next) {
  try {
    const note = noteService.createNote(req.body);
    res.status(httpStatus.CREATED).json(responseFactory.created(note));
  } catch (error) {
    next(error);
  }
}

function updateNote(req, res, next) {
  try {
    const note = noteService.updateNote(req.params.id, req.body);
    res.status(httpStatus.OK).json(responseFactory.success(note));
  } catch (error) {
    next(error);
  }
}

function deleteNote(req, res, next) {
  try {
    noteService.deleteNote(req.params.id);
    res.status(httpStatus.OK).json(responseFactory.deleted());
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllNotes,
  getNoteById,
  getNotesByCustomerId,
  createNote,
  updateNote,
  deleteNote
};
