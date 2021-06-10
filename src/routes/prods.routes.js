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
//READ ONE
prodsRouter.get('/:id', prodCtrl.getProd);
//UPDATE
prodsRouter.put('/:id', prodCtrl.updateProd);
//DELETE
prodsRouter.delete('/:id', prodCtrl.deleteProd);

//METODOS EXTRA

prodsRouter.get('/pCat/:catId', prodCtrl.getProdCat);


module.exports = prodsRouter;