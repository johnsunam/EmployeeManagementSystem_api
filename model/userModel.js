const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contact: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    address: {type: String },
    experince: { type: Object },
    org: {type: String, required: true},
    createdAt: { type: Date, required: true},
    role: { type: String, required: true}

});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);
