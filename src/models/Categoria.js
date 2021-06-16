const mongoose = require('mongoose');
const model = mongoose.model;

const categoriaSchema = new mongoose.Schema({
    nomCat:{
        type:String,
        required:true
    },
    descCat:{
        type:String,
        required:true
    },
    active:{
        type: Boolean,
        required: true
    }
}, {timestamps: true, versionKey: false})

module.exports = model('Categoria', categoriaSchema);


