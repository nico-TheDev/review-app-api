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
    try {
        const subjects = await Subject.find();
        res.json(subjects);
    } catch (err) {
        console.log(err);
    }
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

module.exports.subject_update_post = (req, res) => {
    const { name, code, professor, schedule } = req.body.data;
    const { id } = req.params;

    const updatedSubject = {
        name,
        code,
        professor,
        schedule,
    };

    Subject.findByIdAndUpdate(id, updatedSubject, (err, doc) => {
        if (!err) {
            console.log("Document Updated");
            res.send(doc);
        } else {
            console.log(err);
            res.status(404).send(err);
        }
    });
};

module.exports.subject_delete = (req, res) => {
    const { id } = req.params;

    Subject.findByIdAndDelete(id, (err, doc) => {
        if (!err && doc) {
            console.log("Deleted Successfully");
            res.send(doc);
        } else {
            console.error(err);
            res.send("Unsuccessful Delete");
        }
    });
};

module.exports.subject_get = (req, res) => {
    const { id } = req.params;

    Subject.findById(id, (err, doc) => {
        if (!err) {
            console.log("Subject Get");
            res.json(doc);
        } else {
            console.error("Subject No Found");
            res.status(404).send("Error in the Server: Finding ID");
        }
    });
};
