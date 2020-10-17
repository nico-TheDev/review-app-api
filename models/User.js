const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            lowercase: true,
            required: true,
        },
        lastName: {
            type: String,
            lowercase: true,
            required: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            lowercase: true,
            unique: [true, "Try another email"],
            validate: [isEmail, "Invalid Email"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
    }
);

UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.statics.login = async (email, password) => {
    const user = await User.findOne({ email }).exec();

    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) return user;
        throw new Error("Incorrect password");
    }
    throw new Error("Create an account");
};

const User = model("User", UserSchema);

module.exports = User;
