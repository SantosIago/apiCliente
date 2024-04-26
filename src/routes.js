const express = require('express');
const router = express.Router();

const ClienteController = require('./controller/clienteController');

router.get('/clientes', ClienteController.findAll);
router.get('/clientes/:id', ClienteController.findById);
router.post('/clientes', ClienteController.insert);
router.put('/clientes/:id', ClienteController.update);

module.exports = router;