const mongoose = require("mongoose");


const instituteSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true }
}, { _id: false });

const studentSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true }
}, { _id: false });

const schoolSchema = new mongoose.Schema({
    institutes: [instituteSchema],
    students: [studentSchema]     
}, {
    versionKey: false
});

const SchoolModel = mongoose.model('School', schoolSchema);

module.exports = { SchoolModel };
