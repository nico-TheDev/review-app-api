const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports.validateUser = (req, res, next) => {
    const { token } = req.params;

    if (token) {
        jwt.verify(token, "reviewapp", async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                console.log("user validated")
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};

module.exports.requireAuth = (req, res, next) => {
    const { token } = req.params;

    if (token) {
        jwt.verify(token, "reviewapp", async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.redirect("/login");
    }
};
