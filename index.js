const express = require('express');
const routes = require('./routes');
const mongoose = require('./mongodb');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
 }));
app.use(bodyParser.json());

app.use('/api', routes)

var port = process.env.PORT || 3003


app.listen(port, function () {
    console.log('Server running on port '+ port)
})