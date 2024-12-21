const express = require('express');
const router = express.Router();
const adminlogoutController = require('../controllers/adminlogoutController');

router.post('/', adminlogoutController.handleAdminLogout);

module.exports = router;