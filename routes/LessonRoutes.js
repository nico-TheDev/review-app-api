const { Router } = require("express");
const lessonController = require("../controller/LessonController");

const router = Router();

const url = (link) => `/subject/:subjectID/lesson${link}`;
// get lessons
router.get(url("/all"), lessonController.lessons_all_get);

// get specific lesson

router.get(url('/:id'),lessonController.lesson_get)

// create new lesson
router.post(url("/new"), lessonController.lesson_new_post);

//update lesson
router.post(url("/:id"), lessonController.lesson_edit_post);

//delete lesson
router.delete(url("/:id"), lessonController.lessons_delete);

module.exports = router;
