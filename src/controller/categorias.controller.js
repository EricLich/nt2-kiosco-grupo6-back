const Categoria = require('../models/Categoria');

const catCtrl = {};

//CRUD BASICO

catCtrl.createCat = async (req, res) => {
    try{
        const cat = await new Categoria(req.body);
        cat.save()
           .then(cat => res.json({message: "Categoria agregada"}))
           .catch(err => console.log(err));
    }catch(err){
        console.log(err)
    }
}
catCtrl.getCats = async (req, res) => {
    try{
        const cats = await Categoria.find();
        if(cats.length == 0) return res.status(301).json({message: "No hay categorias"});
        return res.send(cats);
    }catch(err){
        console.log(err)
    }
}
catCtrl.getCat = async (req, res) => {
    try{
        const cat = await Categoria.findById(req.params.id);
        if(!cat) return res.status(301).json({message: "No existe la categoría que busca"});
        return res.send(cat);
    }catch(err){
        console.log(err)
    }
}
catCtrl.updateCat = async (req, res) => {
    try{
        const cat = await Categoria.findByIdAndUpdate(req.params.id, req.body)
                                    .then(cat => res.json({message: "Categoria actualizada"}))
                                    .catch(err => res.json({message: "No se encontró la categoria que quiere actualizar"}));
    }catch(err){
        console.log(err)
    }
}
catCtrl.deleteCat = async (req, res) => {
    try{
        const cat = await Categoria.findByIdAndDelete(req.params.id);
        if(!cat) return res.status(301).json({message: "No existe la categoría que desea eliminar"});
        return res.json({message: "Se eliminó la categoria"})       
    }catch(err){
        console.log(err)
    }
}


module.exports = catCtrl;







