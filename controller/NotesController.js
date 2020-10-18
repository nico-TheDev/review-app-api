

// CREATE NEW NOTE
module.exports.note_post = (req,res) => {
    res.send("NOTE CREATED")
}
// GET NOTE
module.exports.note_get = (req,res) => {
    res.send("NOTE GET")
}
// UPDATE NOTE
module.exports.note_update_post = (req,res) => {
    res.send("NOTE UPDATE")
}
// DELETE NOTE
module.exports.note_delete = (req,res) => {
    res.send("NOTE DELETE")
}

