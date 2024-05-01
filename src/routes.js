const express = require('express');
const router = express.Router();

const ClienteController = require('./controller/clienteController');
const clienteController = require('./controller/clienteController');

router.get('/clientes', ClienteController.findAll);
router.get('/clientes/:id', ClienteController.findById);
router.post('/clientes', ClienteController.insert);
router.put('/clientes/:id', ClienteController.update);
router.delete('/clientes/:id', ClienteController.delete);

router.get("/clientes/soma/:a/:b", clienteController.soma);
router.get("/clientes/subtracao/:a/:b", clienteController.subtracao);
router.get("/clientes/multi/:a/:b", clienteController.multiplicacao);
router.get("/clientes/div/:a/:b", clienteController.divisao);


module.exports = router;