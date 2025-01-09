const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next) => {
    console.log("Inside JWT Middleware")
    try{
        const token = req.headers['authorization'].slice(7)
        console.log(token)

        if(token){
            const jwtVerification = jwt.verify(token, process.env.jwtKey)
            console.log(jwtVerification)

            req.payload = jwtVerification.userId
            next()  
        }
        else{
            res.status(400).json("Please provide the token")
        }
    }
    catch(err){
        res.status(400).json("Please login")
    }
}

module.exports=jwtMiddleware