const express = require('express');
const factsRouter = express.Router();
const factCtrl = require('../controller/facturas.controller');
//BASIC CRUD

//CREATE
factsRouter.post('/', factCtrl.createFact);
//READ
factsRouter.get('/', factCtrl.getFacts);
//READ ONE
factsRouter.get('/:id', factCtrl.getFact);
//UPDATE
factsRouter.put('/:id', factCtrl.updateFact);
//DELETE
factsRouter.delete('/:id', factCtrl.deleteFact);

//FUNCIONES ADICIONALES

factsRouter.get('/cl/:idCli', factCtrl.factPorCliente);

module.exports = factsRouter;