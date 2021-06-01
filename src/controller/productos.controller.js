const Producto = require('../models/Producto');

const prodCtrl = {};

//CRUD BASICO

prodCtrl.createProd = async (req, res) => {
    try{
        const prod = await new Producto(req.body);
        prod.save()
            .then(ds => res.send({message: "Producto agregado"}))
            .catch(err => console.log(err));
    }catch(err){
        console.log(err);
    }
}

prodCtrl.getProds = async (req, res) => {
    try{
        const prods = await Producto.find();
        if(prods.length == 0) return res.status(301).json({message: "No hay productos guardados"});
        return res.send(prods);
    }catch(err){
        console.log(err);
    }
}

prodCtrl.getProd = async (req, res) => {
    try{
        const prod = await Producto.findById(req.params.id);
        if(!prod) return res.status(301).json({message: "No se encontró el producto"});
        return res.send(prod);
    }catch(err){
        console.log(err)
    }
}

prodCtrl.updateProd = async (req, res) => {
    try{
        const prod = await Producto.findByIdAndUpdate(req.params.id, req.body)
                                    .then(prod => res.json({message: "Producto editado"}))
                                    .catch(err => res.json({message: "No existe el producto"}));
    }catch(err){
        console.log(err)
    }
}

prodCtrl.deleteProd = async (req, res) => {
    try{
        const prod = await Producto.findByIdAndDelete(req.params.id);
        if(!prod) return res.status(301).json({message: "No existe el producto que quiere eliminar"})
        return res.json({message: "Producto eliminado con éxito"})
    }catch(err){
        console.log(err)
    }
}

module.exports = prodCtrl;