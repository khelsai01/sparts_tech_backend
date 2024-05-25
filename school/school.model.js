const mongoose = require("mongoose");

// Define the schema for the institute objects
const instituteSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true }
}, { _id: false });

// Define the schema for the student objects
const studentSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true }
}, { _id: false });

// Define the main schema for the school
const schoolSchema = new mongoose.Schema({
    institutes: [instituteSchema], // An array of institute objects
    students: [studentSchema]      // An array of student objects
}, {
    versionKey: false
});

const SchoolModel = mongoose.model('School', schoolSchema);

module.exports = { SchoolModel };
