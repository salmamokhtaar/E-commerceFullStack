const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({


    email:{
        type : String,
        require : true
    },
    username:{
        type : String,
        require : true
    },
    password:{
        type : String,
        require : true
    },
    
},
{timestamp : true}   
)

module.exports = mongoose.model("Users",UserSchema )
