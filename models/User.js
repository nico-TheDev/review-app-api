const { Schema,model } = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')


const UserSchema = new Schema({
    email:{
        type:String,
        required:[true,'Email is required'],
        lowercase:true,
        unique:[true,'Try another email'],
        validate:[isEmail,'Invalid Email']
    },
    password:{
        type:String,
        required:[true,'Password is required'],
    }
})

UserSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password,salt)
    next()
})

const User = model('User',UserSchema)

module.exports = User