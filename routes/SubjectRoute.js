const { Router } = require('express')
const subjectController = require("../controller/SubjectController")

const router = Router();

// GET SUBJECTS
router.get('/all',subjectController.subject_all_get)
//Add Subject
router.post('/new',subjectController.subject_post)
//edit Subject
router.post('/:id',subjectController.subject_update_post)
// delete subject
router.delete('/:id',subjectController.subject_delete)

module.exports = router