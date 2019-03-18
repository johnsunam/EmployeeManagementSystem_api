const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    orgName: { type: String, required: true },
    orgNature: { type: String, required: true },
    location: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String },
    level: { type: String },
    start: { type: Date },
    duration: { type: Number },
    createdAt: { type: Date, required: true },
    user: { type: String, required: true }
});


module.exports = mongoose.model('Experience', ExperienceSchema);
