const express = require('express');
const router = express.Router();
const adminprofileController = require('../controllers/adminprofileController');

router.get('/', adminprofileController.getAdminProfile);

module.exports = router;