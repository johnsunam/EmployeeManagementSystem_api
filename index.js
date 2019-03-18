const express = require('express');
const routes = require('./routes');
const mongoose = require('./mongodb');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
 }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append('Access-Control-Allow-Methods',  'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    // res.append("Content-Type", "application/json")
    next();
});

app.use('/api', routes);

var port = process.env.PORT || 3003;


app.listen(port, function () {
    console.log('Server running on port '+ port)
})