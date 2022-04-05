const express = require('express');
const { urlencoded } = require('express')
const path = require('path');
const mainRouter = require('./routes/index');

const app = express()
const port = 8080; 
app.listen(port, () => {
    console.log('ready in port:' + puerto)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// definicion routers

app.use('/api', mainRouter)