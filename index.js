//1. load .env file
require('dotenv').config()

//2. import express
const express = require("express")

//3. import cors
const cors = require("cors")

//9. import db
const db = require('./DB/connection')

//10. import router
const router = require('./Routes/router')

//11. import application middleware
const applicationMiddleware = require('./Middlewares/applicationMiddleware')

//4. create application server
const pfServer = express()

//5. middleware configuration
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use(applicationMiddleware)
//export image to frondend
pfServer.use('/data',express.static('./data'))
//6. define port
const PORT = 3000 || process.env.PORT

//7. run server
pfServer.listen(PORT,()=>{
    console.log("pf server connected to port", PORT)
})

//8. display in http://localhost:3000/
pfServer.get('/',(req,res)=>{
    res.send("Welcome to PF Server")
})