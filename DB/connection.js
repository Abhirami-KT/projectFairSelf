//import mongoose
const mongoose = require('mongoose')

//get connection string
const connectionString = process.env.connectionString

//define connection
mongoose.connect(connectionString)
.then(res=>{
    console.log("PF server connected to mongoDB")
})
.catch(err=>{
    console.log(err)
})

