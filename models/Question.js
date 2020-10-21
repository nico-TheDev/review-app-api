const { Schema, model } = require("mongoose");

const QuestionSchema = new Schema({
    lessonID: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    choiceOne: {
        type: String,
        required: true,
    },
    choiceTwo: {
        type: String,
        required: true,
    },
    choiceThree: {
        type: String,
        required: true,
    },
    choiceFour: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
});

const Question = model("Question", QuestionSchema);

module.exports = Question;
