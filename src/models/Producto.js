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
		required: false
	},
	stock: {
		type: Number,
		required: true
	},
	active: {
		type: Boolean,
		required: true
	}
}, {timestamps: true, versionKey: false});

module.exports = model('Producto', prodSchema);
