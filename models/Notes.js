const { Schema, model } = require("mongoose");

const NotesSchema = new Schema(
    {
        lessonID: {
            type: String,
            required: true,
        },
        notes: String,
    },
    {
        timestamps: true,
    }
);

const Note = model("Note", NotesSchema);

module.exports = Note;
