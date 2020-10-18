const { Router } = require("express");
const NoteController = require("../controller/NotesController");

const router = Router();

const url = (link) => `/:id/note${link}`;

// CREATE NEW NOTE
router.post(url("/create"),NoteController.note_post);
// GET NOTE
router.get(url("/:id"),NoteController.note_post);
// UPDATE NOTE
router.patch(url("/:id"),NoteController.note_post);
// DELETE NOTE
router.delete(url("/:id"),NoteController.note_post);
