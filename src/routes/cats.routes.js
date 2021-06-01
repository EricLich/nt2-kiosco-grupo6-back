const express = require('express');
const catsRouter = express.Router();
const catCtrl = require('../controller/categorias.controller');
//BASIC CRUD

//CREATE
catsRouter.post('/', catCtrl.createCat);
//READ
catsRouter.get('/', catCtrl.getCats);
//READ ONE
catsRouter.get('/:id', catCtrl.getCat);
//UPDATE
catsRouter.put('/:id', catCtrl.updateCat);
//DELETE
catsRouter.delete('/:id', catCtrl.deleteCat);

module.exports = catsRouter;