const mongoose = require('mongoose')

const jwt = require('jsonwebtoken')

const users = require('../Models/userSchema')

//register logic
exports.registerAPI = async (req,res) => {
    console.log("Inside register API")

    const {username,email,password} = req.body

    const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(401).json("User already exists")
    }
    else{
        const newUser = new users({
            username:username,
            email:email,
            password:password,
            github:"",
            linkedin:"",
            profilePic:""
        })
        await newUser.save()
        res.status(200).json("User registration success")
    }

}

//login logic
exports.loginAPI = async (req,res) => {
    console.log("Inside login API")

    const {email,password} = req.body

    const existingUser = await users.findOne({email, password})
    if(existingUser){
        const token = jwt.sign({userId:existingUser._id}, process.env.jwtKey)
        console.log(token)
        res.status(201).json({currentUser:existingUser,token})
    }
    else{
        res.status(400).json("Incorrect email or password")
    }

}