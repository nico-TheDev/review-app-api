const User = require("../models/User");
const jwt = require("jsonwebtoken");

const expiration = 3 * 24 * 60 * 60;

const handleErrors = (err) => {
    console.log(err.message);
};

const createToken = (id) => {
    return jwt.sign({ id }, "reviewapp", { expiresIn: expiration });
};

module.exports.signup_post = async (req, res) => {
    const { firstName, lastName, email, password } = req.body.data;

    try {
        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
        });
        const token = createToken(user._id);
        res.cookie("jwt", token, {
            domain: "http://localhost:3001",
            maxAge: expiration * 1000,
        });
        res.status(201).json({ user: user._id });
    } catch (err) {
        handleErrors(err);
        res.status(404).send(err);
    }
};
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body.data;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie("jwt", token, {
            domain: "http://localhost:3001",
            maxAge: expiration * 1000,
        });
        res.status(201).json({ user: user._id, token });
    } catch (err) {
        handleErrors(err);
        res.status(404).send(err);
    }
};

module.exports.logout_delete = (req, res) => {
    req.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/login");
};

module.exports.user_get = async (req, res) => {
    const { id } = req.body.data;

    try {
        const user = await User.findById(id);
        res.status(200).json({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        });
    } catch (err) {
        res.status(404).json(err);
    }
};
