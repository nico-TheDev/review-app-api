const { Router } = require("express");
const NoteController = require("../controller/NotesController");

const router = Router();

const url = (link) => `/note${link}`;

// CREATE NEW NOTE
router.post(url("/create"),NoteController.note_post);
// GET NOTE
router.get(url("/:id"),NoteController.note_get);
// UPDATE NOTE
router.put(url("/:id"),NoteController.note_update_post);
// DELETE NOTE
router.delete(url("/:id"),NoteController.note_delete);


module.exports = router;