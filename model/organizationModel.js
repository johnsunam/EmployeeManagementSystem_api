const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const OrganizationSchema = new Schema({
    name: { type: String, required: true, unique: true}
});

OrganizationSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Organization', OrganizationSchema);
