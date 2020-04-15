const { Router } = require('express');

const CreditoController = require('./src/Controllers/CreditoController');

const routes = Router();

routes.post('/credito', CreditoController.calculoCredito);

module.exports = routes;