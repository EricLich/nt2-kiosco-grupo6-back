const mongoose = require('mongoose');
const model = mongoose.model;

const productoSchema = new mongoose.Schema({
    nomProd:{
		type: String,
		required: true
	},
	desc: {
		type:String,
		required: true
	},
	precio: {
		type: Number,
		required: true
	},
	imgPath:{
		type:String,
		required: true
	},
	stock: {
		type: Number,
		required: true
	}
}, {timestamps: true, versionKey: false});

module.exports = model('Producto', carSchema);
