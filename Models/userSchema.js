//import mongoose
const mongoose = require('mongoose')

//create userSchema
const userSchema = {
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String
    },
    linkedin:{
        type:String
    },
    profilePic:{
        type:String
    }
}

//model creation
const users = mongoose.model('users',userSchema)

module.exports = users