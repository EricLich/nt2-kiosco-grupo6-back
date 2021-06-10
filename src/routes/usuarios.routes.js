const express = require('express');
const userRouter = express.Router();
const userCtrl = require('../controller/usuarios.controller');
//BASIC CRUD
//TERMINAR
//CREATE
userRouter.post('/', userCtrl.createUser);
//READ
userRouter.get('/', userCtrl.getUsers);
//READ ONE
userRouter.get('/:id', userCtrl.getUser);
//UPDATE
userRouter.put('/:id', userCtrl.updateUser);
//DELETE
userRouter.delete('/:id', userCtrl.deleteUser);

module.exports = userRouter;