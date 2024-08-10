const express = require('express');
const router = express.Router();
const { getProgramas } = require('../controllers/mentoriaController');

router.get('/', getProgramas);

module.exports = router;
