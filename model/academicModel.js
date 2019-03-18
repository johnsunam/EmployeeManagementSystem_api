const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AcademicSchema = new Schema({
    degree: { type: String, required: true },
    program: { type: String, required: true },
    board: { type: String, required: true },
    institution: { type: String, required: true },
    year: {type: String },
    user: { type: String, required: true },
    createdAt: { type: Date, required: true},
});


module.exports = mongoose.model('Academic', AcademicSchema);
