const express = require('express');
const noteController = require('../controllers/noteController');
const validateRequest = require('../middleware/validateRequest');
const { validateNotePayload } = require('../validators/noteValidator');

const router = express.Router();

router.get('/', noteController.getAllNotes);
router.get('/customer/:customerId', noteController.getNotesByCustomerId);
router.get('/:id', noteController.getNoteById);
router.post('/', validateRequest(validateNotePayload), noteController.createNote);
router.put('/:id', validateRequest(validateNotePayload), noteController.updateNote);
router.delete('/:id', noteController.deleteNote);

module.exports = router;
