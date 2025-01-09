// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,'./Data')
//     },
//     filename:(req,file,callback)=>{
//         callback(null,`projectImage-${file.originalname}`)
//     }
// })

// const multerMiddleware = multer({storage})

// module.exports=multerMiddleware

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './Data');  // Directory to store the files
    },
    filename: (req, file, callback) => {
        callback(null, `projectImage-${file.originalname}`);
    }
});

const multerMiddleware = multer({ storage: storage });

module.exports = multerMiddleware;
