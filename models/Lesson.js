const { Schema, model } = require("mongoose");

const lessonSchema = new Schema(
    {
        subjectID: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        count: {
            type: String,
            required: true,
        },
        description: String,
        highScore: Number,
        numberOfTries: Number,
    },
    {
        timestamps: true,
    }
);

const Lesson = model("Lesson", lessonSchema);

module.exports = Lesson;
