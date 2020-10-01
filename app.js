const express = require("express");
const mongoose = require("mongoose");

const dbi = `mongodb+srv://nico:1234@cluster0.mwvo1.mongodb.net/review-app?retryWrites=true&w=majority`;
const app = express();

mongoose.connect(
    dbi,
    (err) => {
        if (err) {
            console.log("ERROR CONNECTING TO THE DB");
        } else {
            console.log("CONNECTED TO THE DB");
            app.listen(3000, () => {
                console.log("SERVER RUNNING");
            });
        }
    },
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.get("/", (req, res) => {
    res.send("Hello Review App!");
});
