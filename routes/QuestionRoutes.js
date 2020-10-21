const { Router } = require("express");
const QuestionController = require("../controller/QuestionController");

const router = Router();

// GET ALL QUESTIONS
router.get("/question/:lessonID/all", QuestionController.question_all_get);
// GET SPECIFIC QUESTION
router.get("/question/:questionID", QuestionController.question_get);
// CREATE QUESTION
router.post("/question/new", QuestionController.question_post);
// UPDATE QUESTION
router.post("/question/:questionID", QuestionController.question_update_post);
// DELETE QUESTION
router.delete("/question/:questionID", QuestionController.question_delete);

module.exports = router;