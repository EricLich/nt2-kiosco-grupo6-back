const Factura = require('../models/Factura');
const Producto = require('../models/Producto');
const prodCtrl = require('./productos.controller');

const factCtrl = {};

//CRUD BASICO

factCtrl.createFact = async (req, res) => {
    try{
        //calculo el total, creo una nueva factura, la guardo y actualizo el stock
        let total = await factCtrl.calcTotalFact(req.body.productos);
        const fact = await new Factura({...req.body, total});
        fact.save()
           .then(fact => {
            res.json({message: "Factura generada"})
           })
           .catch(err => console.log(err));
        await prodCtrl.updateStockProd(req.body.productos);
    }catch(err){
        console.log(err)
    }
}

factCtrl.calcTotalFact = async (productos) => {
    let total = 0;
    for(let producto of productos){
        let prodBuscado = await Producto.findById(producto.idProd);
        total += producto.cant * prodBuscado.precio
    }
    return total;
}

factCtrl.getFacts = async (req, res) => {
    try{
        const facts = await Factura.find();
        if(facts.length == 0) return res.status(301).json({message: "No hay facturas"});
        return res.json(facts)
    }catch(err){
        console.log(err)
    }
}
factCtrl.getFact = async (req, res) => {
    try{
        const fact = await Factura.findById(req.params.id);
        if(!fact) return res.status(301).json({message: "No existe la factura buscada"});
        return res.json(fact);
    }catch(err){
        console.log(err)
    }
}
factCtrl.updateFact = async (req, res) => {
    try{
        const fact = await Factura.findByIdAndUpdate(req.params.id, req.body)
                                    .then(prod => res.json({message: "Factura editada"}))
                                    .catch(err => res.json({message: "No existe la factura"}));
    }catch(err){
        console.log(err)
    }
}
factCtrl.deleteFact = async (req, res) => {
    try{
        const fact = await Factura.findByIdAndDelete(req.params.id);
        if(!fact) return res.status(301).json({message: "No existe la factura que quiere eliminar"})
        return res.json({message: "Factura eliminada con éxito"})
    }catch(err){
        console.log(err)
    }
}

//FUNCIOES ADICIONALES FACTURAS

factCtrl.factPorCliente = async (req, res) => {
    try{
        const factsPcliente = await Factura.find({dni: req.params.idCli});
        if(factsPcliente.length == 0) return res.status(301).json({message: "El cliente no tiene facturas"})
        return res.json(factsPcliente);
    }catch(err){
        console.log(err)
    }
}


module.exports = factCtrl;







