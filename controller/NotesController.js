const Notes = require("../models/Notes");

// CREATE NEW NOTE
module.exports.note_post = async (req, res) => {
    const { lessonID, notes } = req.body.data;

    try {
        const note = await Notes.create({
            lessonID,
            notes,
        });
        console.log("NEW NOTE CREATED");
        res.json(note);
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
};
// GET NOTE
module.exports.note_get = async (req, res) => {
    const { id } = req.params;

    try {
        const note = await Notes.findById(id);
        if (note) res.json(note);
        else {
            res.status(404).send("NO NOTE FOUND");
        }
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
};
// UPDATE NOTE
module.exports.note_update_post = async (req, res) => {
    const { lessonID, notes } = req.body.data;
    const { id } = req.params;

    try {
        const note = await Notes.findByIdAndUpdate(id, {
            lessonID,
            notes,
        });
        console.log("NOTE UPDATED");
        res.json(note);
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
};
// DELETE NOTE
module.exports.note_delete = async (req, res) => {
    const { id } = req.params;

    try {
        const note = await Notes.findByIdAndDelete(id);
        console.log("NOTE DELETED");
        res.json(note);
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
};
