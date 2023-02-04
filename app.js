const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


//Import Routes
const itemsRoute = require('./routes/items');

app.use('/items', itemsRoute);



//connect to db

mongoose.connect(`${process.env.DB_CONNECTION}`, () => 
    console.log('connected to db.')
);

app.listen(3000);