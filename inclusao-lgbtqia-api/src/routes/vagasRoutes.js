const express = require('express');
const router = express.Router();
const { getVagas } = require('../controllers/vagasController');

router.get('/', getVagas);

module.exports = router;
