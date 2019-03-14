const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/EMS', {}, function(err) {
    if(err) {
        throw err;
    }
    else { 
        console.log('Successfully connected to MongoDB Database!');
    }
});

module.exports = mongoose;