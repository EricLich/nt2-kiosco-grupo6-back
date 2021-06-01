const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//imports de routers
const catsRouter = require('./routes/cats.routes');
const prodsRouter = require('./routes/prods.routes');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//ROUTES
app.use('/categoria', catsRouter);
app.use('/productos', prodsRouter);

module.exports = app;