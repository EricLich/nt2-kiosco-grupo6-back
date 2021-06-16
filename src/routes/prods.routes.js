const express = require('express');
const prodsRouter = express.Router();
const prodCtrl = require('../controller/productos.controller');
const multer = require('multer');

const upload = multer({
    dest: '../assets/img'
})

//BASIC CRUD

//CREATE
//SUBIDA DE IMG
prodsRouter.post('/subir-imagen', upload.single('img'));
//CREACION DE PROD EN BDD
prodsRouter.post('/', prodCtrl.createProd);
//READ
prodsRouter.get('/', prodCtrl.getProds);
//READ INACTIVE
prodsRouter.get('/inactive-prods', prodCtrl.getInactiveProds);
//READ ONE
prodsRouter.get('/:id', prodCtrl.getProd);
//UPDATE
prodsRouter.put('/:id', prodCtrl.updateProd);
//ACTIVATE
prodsRouter.put('/activate/:id', prodCtrl.activateProd);
//DELETE
prodsRouter.delete('/:id', prodCtrl.deactivateProd);




//METODOS EXTRA

prodsRouter.get('/pCat/:catId', prodCtrl.getProdCat);


module.exports = prodsRouter;