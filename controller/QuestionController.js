const Question = require("../models/Question");

// GET ALL QUESTIONS
module.exports.question_all_get = async (req, res) => {
    const { lessonID } = req.params;
    try {
        const questionList = await Question.find({ lessonID });
        // console.log("question for current lesson");
        res.json(questionList);
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
};
// GET SPECIFIC QUESTION
module.exports.question_get = async (req, res) => {
    const { questionID } = req.params;

    try {
        const question = await Question.findById(questionID);
        // console.log("question found");
        res.json(question);
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
};

// CREATE QUESTION
module.exports.question_post = async (req, res) => {
    const questionData = req.body.data;

    try {
        const question = await Question.create({ ...questionData });
        // console.log("new question created!");
        res.json(question);
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
};

// UPDATE QUESTION

module.exports.question_update_post = async (req, res) => {
    const questionData = req.body.data;
    const { questionID } = req.params;

    try {
        const question = await Question.findByIdAndUpdate(questionID, {
            ...questionData,
        });
        // console.log("question updated");
        res.json(question);
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
};

// DELETE QUESTION
module.exports.question_delete = async (req, res) => {
    const { questionID } = req.params;

    try {
        const question = await Question.findByIdAndDelete(questionID);
        // console.log("question deleted");
        res.json(question);
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
};
