const { json } = require('express');
const projects = require('../Models/projectSchema')

//addProject logic
exports.addProjectAPI = async (req, res) => {
    console.log("Inside Add Project API");

    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    const { title, language, github, website, overview } = req.body;
    const projectImg = req.file.filename; //from multer middleware
    const userId = req.payload //from jwt middleware
    console.log("projectImg", projectImg)
    console.log("FormData", title, language, github, website, overview, userId)

    try {
        console.log("Inside Try");

        const project = await projects.findOne({ github })
        console.log("existingProject", project)
        if (project) {
            return res.status(409).json({ message: "Project already exists.." });
        }
        else {
            const newProject = new projects({ title, language, github, website, overview, projectImg, userId })
            //to save these details in mongodba
            await newProject.save()
            res.status(200).json(newProject)
        }
    }
    catch (err) {
        res.status(409).json(err)
    }
}

//get all user project logic
exports.getAllUserProjectAPI = async (req, res) => {
    console.log("Inside get all user Project API");

    try {
        const response = await projects.find()
        console.log(response)
        res.status(200).json(response);
    }
    catch (err) {
        res.status(409).json(err)
    }
}

//get a user project logic
exports.getAUserProjectAPI = async (req, res) => {
    console.log("Inside get A User Project API");

    const userId = req.payload
    try {
        const response = await projects.find({userId})
        console.log(response)
        res.status(200).json(response);
    }
    catch (err) {
        res.status(409).json(err)
    }
}

//get home project logic
exports.getHomeProjectAPI = async (req, res) => {
    console.log("Inside get home Project API");

    try {
        const response = await projects.find().limit(3)
        console.log(response)
        res.status(200).json(response);
    }
    catch (err) {
        res.status(409).json(err)
    }
}

//editProject logic
exports.editProjectAPI = async (req, res) => {
    console.log("Inside edit Project API");
    const { title, language, github, website, overview, projectImg } = req.body;
    const updateImg = req.file ? req.file.filename : projectImg;
    const userId = req.payload //from jwt middleware
    const {projectId} = req.params
    console.log("updateImg", updateImg)
    console.log("FormData", title, language, github, website, overview, userId)

    try {

        const project = await projects.findByIdAndUpdate({ _id:projectId }, 
            { 
                title:title, 
                language:language, 
                github:github, 
                website:website, 
                overview:overview, 
                projectImg:updateImg, 
            })
        await project.save()
        res.status(200).json(project)
    }
    catch (err) {
        res.status(409).json(err)
    }
}

exports.deleteProjectAPI = async (req, res) => {
    console.log("Inside delete project API")
    const {projectId} = req.params
    try{
        const project = await projects.findByIdAndDelete({_id:projectId})
        res.status(200).json(project)
    }
    catch(err){
        res.status(400),json(err)
    }
}