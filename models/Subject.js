const { Schema, model } = require("mongoose");

const lessonSchema = new Schema({
    count: Number,
    name: String,
});

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: [true, "Class is already registered"],
        lowercase: true,
    },
    professor: {
        type: String,
        required: true,
    },
    schedule: {
        type: String,
        required: true,
        lowercase:true
    },
    lessons: [lessonSchema],
});

const Subject = model("Subject", subjectSchema);

module.exports = Subject;
