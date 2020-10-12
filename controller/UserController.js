const User = require('../models/User');

const handleErrors = (err) => {
    console.log(err.message)
}

module.exports.signup_post = async (req,res) => {
    const { email,password } = req.body.data

    try {
        const user = await User.create({
            email,
            password
        })
        res.send(user)
    }
    catch(err){
        handleErrors(err)
        res.send(err)
    }

}
module.exports.login_post = (req,res) => {
    res.send('LOGIN')
}