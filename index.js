require('dotenv').config( { path: 'creds.env' } );

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

app.use('/ping' , require('./src/routes'));
app.use('/products', require('./src/routes/product'));