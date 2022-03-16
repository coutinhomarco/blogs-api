const express = require('express');
const { create } = require('../controllers/user.controller');
const validateUser = require('../services/validateUser.services');

const router = express.Router();

router.use(validateUser);
router.post('/user', create);

module.exports = router;