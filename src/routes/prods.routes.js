const express = require('express');
const prodsRouter = express.Router();
const prodCtrl = require('../controller/productos.controller');
//BASIC CRUD

//CREATE
prodsRouter.post('/', prodCtrl.createProd);
//READ
prodsRouter.get('/', prodCtrl.getProds);
//READ ONE
prodsRouter.get('/:id', prodCtrl.getProd);
//UPDATE
prodsRouter.put('/:id', prodCtrl.updateProd);
//DELETE
prodsRouter.delete('/:id', prodCtrl.deleteProd);

module.exports = prodsRouter;