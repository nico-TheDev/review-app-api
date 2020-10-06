const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ROUTES
const SubjectRoute = require("./routes/SubjectRoute");
const LessonRoutes = require("./routes/LessonRoutes");

const dbi = `mongodb+srv://nico:1234@cluster0.mwvo1.mongodb.net/review-app?retryWrites=true&w=majority`;
const app = express();

// INITIALIZE MIDDLEWARE

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// INITIALIZED SERVER AND DATABASE
mongoose
    .connect(dbi, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false
    })
    .then(() => {
        console.log("CONNECTED TO THE DB");
        app.listen(3000, () => {
            console.log("SERVER RUNNING");
        });
    })
    .catch((err) => {
        console.log(err);
    });

app.use('/subject',SubjectRoute);
app.use(LessonRoutes);


app.use((req, res) => {
    res.send("404 not found");
});
