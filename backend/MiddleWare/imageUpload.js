const multer = require('multer');

const imageLocation = multer.diskStorage({
    destination : (req,file,cb)=> {
        cb(null, "productImages")
    },
    filename: (req,file,cb)=> {
        cb(null, file.originalname)


    }

  
})
const uploadImage = multer({
    storage: imageLocation

        
})
module.exports = uploadImage