const express = require('express');
const vehicleController = require('../controllers/vehicleController');
const validateRequest = require('../middleware/validateRequest');
const { validateVehiclePayload } = require('../validators/vehicleValidator');

const router = express.Router();

router.get('/', vehicleController.getAllVehicles);
router.get('/:id', vehicleController.getVehicleById);
router.post('/', validateRequest(validateVehiclePayload), vehicleController.createVehicle);
router.put('/:id', validateRequest(validateVehiclePayload), vehicleController.updateVehicle);
router.delete('/:id', vehicleController.deleteVehicle);

module.exports = router;
