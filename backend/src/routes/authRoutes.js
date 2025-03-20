const express = require('express');

const { welcome, login} = require("../controllers/authController");

const router = express.Router();

router.get('/', welcome);
router.post('/login', login);

module.exports = router;
