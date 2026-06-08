const express = require('express');
const customerController = require('../controllers/customerController');
const validateRequest = require('../middleware/validateRequest');
const { validateCustomerPayload } = require('../validators/customerValidator');

const router = express.Router();

router.get('/', customerController.getAllCustomers);
router.get('/search', customerController.searchCustomers);
router.get('/:id', customerController.getCustomerById);
router.post('/', validateRequest(validateCustomerPayload), customerController.createCustomer);
router.put('/:id', validateRequest(validateCustomerPayload), customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
