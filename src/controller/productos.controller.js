const Categoria = require('../models/Categoria');
const Producto = require('../models/Producto');
const catCtrl = require('./categorias.controller');

const prodCtrl = {};

//CRUD BASICO

prodCtrl.createProd = async (req, res) => {
    try{
        const prod = await new Producto({...req.body, active:true});
        prod.save()
            .then(ds => res.json({message: "Producto agregado"}))
            .catch(err => console.log(err));
    }catch(err){
        console.log(err);
    }
}

prodCtrl.getProds = async (req, res) => {
    try{
        const prods = await Producto.find({active:true}).exec();
        if(prods.length == 0) return res.status(301).json({message: "No hay productos guardados"});
        return res.send(prods);
    }catch(err){
        console.log(err);
    }
}
prodCtrl.getInactiveProds = async (req, res) => {
    try{
        const prods = await Producto.find({active:false}).exec();
        if(prods.length == 0) return res.status(301).json({message: "No hay productos guardados"});
        return res.send(prods);
    }catch(err){
        console.log(err);
    }
}

prodCtrl.getProd = async (req, res) => {
    try{
        const prod = await Producto.findById({_id:req.params.id, active:true});
        if(!prod) return res.status(301).json({message: "No se encontrĂ³ el producto"});
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

prodCtrl.updateStockProd = async (productos) => {
    try{
        for(let producto of productos){
            let prodPStock = await Producto.findById(producto.idProd)
            const stockReal = prodPStock.stock - producto.cant;
            const prod = await Producto.findByIdAndUpdate(producto.idProd, {stock: stockReal})
            .then(prod => console.log("Stock actualizado"))
            .catch(err => console.log(err))
        }
    }catch(err){
        console.log(err)
    }
}

prodCtrl.deactivateProd = async (req, res) => {
    try{
        //const prod = await Producto.findByIdAndDelete(req.params.id);
        const prod = await Producto.findByIdAndUpdate(req.params.id, {active: false})
        if(!prod) return res.status(301).json({message: "No existe el producto que quiere desactivar"})
        return res.json({message: "Producto desactivado con Ă©xito"})
    }catch(err){
        console.log(err)
    }
}

prodCtrl.activateProd = async (req, res) => {
    try{
        //const prod = await Producto.findByIdAndDelete(req.params.id);
        const prod = await Producto.findByIdAndUpdate(req.params.id, {active: true})
        if(!prod) return res.status(301).json({message: "No existe el producto que quiere activar"})
        return res.json({message: "Producto activado con Ă©xito"})
    }catch(err){
        console.log(err)
    }
}
//METODOS EXTRA

prodCtrl.getProdCat = async (req, res) => {
    try{
        if(await Categoria.findById(req.params.catId)){
            const prodsCat = await Producto.find({categoriaId: req.params.catId});
            if(prodsCat.length == 0) return res.status(301).json({message:"No hay productos de esa categoria"})
            return res.json(prodsCat);
        }else{
            res.status(301).json({message: "No existe la categoria buscada"})
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = prodCtrl;