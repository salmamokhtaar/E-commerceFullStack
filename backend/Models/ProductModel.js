const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image:{
        type : String,
        required : true,
    },
    name:{
        type : String,
        required : true,
    },
    price:{
        type : Number,
        required : true,
    },
    cetegory:{
        type : String,
        required : true,
    },
    description:{
        type : String,
        required : true,
    },
}, 
{timestamp: true}
)

module.exports = mongoose.model('Product' , productSchema)