const express = require('express');
const router = express.Router();
const { getDireitos } = require('../controllers/direitosController');

router.get('/', getDireitos);

module.exports = router;
