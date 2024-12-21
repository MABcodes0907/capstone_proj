const express = require('express');
const router = express.Router();
const adminloginController = require('../controllers/adminloginController');

router.post('/', adminloginController.handleAdminLogin);

module.exports = router;