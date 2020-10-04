const { Router } = require('express')
const subjectController = require("../controller/SubjectController")

const router = Router();

// GET SUBJECTS
router.get('/subject/all',subjectController.subject_all_get)
//Add Subject
router.post('/subject/new',subjectController.subject_post)

//edit Subject


module.exports = router