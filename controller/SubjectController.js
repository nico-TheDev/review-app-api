const mongoose = require("mongoose");
const Subject = require("../models/Subject");

const handleErrors = (err) => {
    if (err.message.includes("validation failed")) {
        // Object.entries(err.errors).forEach((item) => {
        //     console.log(item);
        // });
        console.log(err.errors);
    }
};

module.exports.subject_all_get = async (req, res) => {
    const subjects = await Subject.find();
    res.json(subjects);
};
module.exports.subject_post = async (req, res) => {
    const { name, code, professor, schedule } = req.body.data;
    console.log(req.body);
    try {
        const subject = await Subject.create({
            name,
            code,
            professor,
            schedule,
        });

        console.log(subject);

        res.send("New Subject Created");
    } catch (err) {
        handleErrors(err);
        res.status(400).send("Error in the server");
    }
};
