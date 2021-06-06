const mongoose = require('mongoose');
const model = mongoose.model;

const facturaSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    dni:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    numTarjeta:{
        type:String,
        required:true
    },
    productos:[
        {
            _id: false,
            idProd:{
                type: mongoose.Schema.Types.ObjectId,
                required: true
            },
            cant:{
                type:Number,
                required:true
            } 		

        }
    ],
    total:{
        type: Number,
        required: true
    }
    
}, {timestamps: true, versionKey: false})

module.exports = model('Factura', facturaSchema);


