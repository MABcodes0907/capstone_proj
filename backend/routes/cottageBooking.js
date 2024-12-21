const express = require('express');
const router = express.Router();
const cottageBookingController = require('../controllers/cottageBookingController');

router.post('/', cottageBookingController.handleCottageBooking);

module.exports = router;