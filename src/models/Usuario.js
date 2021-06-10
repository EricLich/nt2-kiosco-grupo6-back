const model = mongoose.model;

const userSchema = new mongoose.Schema({
    nombre:{
        type:String,
        requierd:true
    },
    apellido:{
        type:String,
        required:true
    },
    dni:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        required:true
    }
}, {timestamps: true, versionKey: false});

module.exports = model('Usuario', userSchema);
