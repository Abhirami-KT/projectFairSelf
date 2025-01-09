//import mongoose
const mongoose = require('mongoose')

//create projectSchema
const projectSchema = {
    title:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    projectImg:{
        type:String,
        required:true
    },
    userId:{
        type:String
    }
}

//model creation
const projects = mongoose.model('projects',projectSchema)

module.exports = projects