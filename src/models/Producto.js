const mongoose = require('mongoose');
const model = mongoose.model;

const prodSchema = new mongoose.Schema({
    nomProd:{
		type: String,
		required: true
	},
	desc: {
		type:String,
		required: true
	},
	categoriaId:{
		type: mongoose.Schema.Types.ObjectId
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

module.exports = model('Producto', prodSchema);
