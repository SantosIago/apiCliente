const express = require('express');
const router = express.Router();

const ClienteController = require('./controller/clienteController');

router.get('/clientes', ClienteController.findAll);

module.exports = router;