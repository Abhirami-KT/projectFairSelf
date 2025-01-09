const applicationMiddleware = (req,res,next) => {
    console.log("Inside application middle ware")
    next()
}
module.exports=applicationMiddleware