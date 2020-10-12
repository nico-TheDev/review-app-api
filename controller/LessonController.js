const Lesson = require("../models/Lesson");

module.exports.lessons_all_get = async (req, res) => {
    const { subjectID } = req.params;

    try {
        const lessons = await Lesson.find({ subjectID });
        res.json(lessons);
    }catch(err){
        console.log(err);
        res.status(400).send("Error in the server");
    }
};

module.exports.lesson_get = async  (req,res) => {
    const {id} = req.params

    try{
        const lesson = await Lesson.findById(id)
        res.json(lesson)
    }
    catch(err){
        console.log(err)
        res.status(404).send(err)
    }

}   

module.exports.lesson_new_post = async (req, res) => {
    const { subjectID, title, count, desc } = req.body.data;
    try {
        const lesson = await Lesson.create({
            subjectID,
            title,
            count,
            desc,
        });

        console.log(lesson);
        res.send(`New Lesson Created: ${lesson.title}`);
    } catch (err) {
        console.log(err);
        res.status(400).send("Error in the server");
    }
};
module.exports.lesson_edit_post = (req, res) => {
    const { subjectID, title, count, desc } = req.body.data;
    const {id } = req.params;

    const updatedLesson = {
        subjectID,
        title,
        count,
        desc
    }

    Lesson.findByIdAndUpdate(id,updatedLesson,(err,doc) =>{
        if(!err){
            console.log('Lesson Updated!')
            res.send(doc);
        }else{
            console.log(err);
            res.status(404).send(err);
        }
    })

};
module.exports.lessons_delete = (req, res) => {
    const { id } = req.params;

    Lesson.findByIdAndDelete(id,(err,doc) => {
        if(!err){
            console.log('Lesson Deleted!')
            res.send(doc)
        }else{
            console.log(err);
            res.status(404).send(err);
        }
    })
};
