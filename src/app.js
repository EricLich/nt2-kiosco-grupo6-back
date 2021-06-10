const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
    destination: function (req, file, cb) {
        cb(null, './src/assets/img')
    }
})

//imports de routers
const catsRouter = require('./routes/cats.routes');
const prodsRouter = require('./routes/prods.routes');
const factsRouter = require('./routes/facturas.routes');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(multer({
    storage: storage,
}).single('img'))

//ROUTES
app.post('/subir-imagen')
app.use('/categoria', catsRouter);
app.use('/productos', prodsRouter);
app.use('/facturas', factsRouter);

module.exports = app;