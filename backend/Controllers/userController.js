
const userModel = require('../Models/userModel')

const registerUser = async (req, res) => {
    try{

        const newUser = userModel(req.body)
        const SaveUser = await newUser.save()
        if(SaveUser){
            res.send(SaveUser)
        }

    }catch(err){
        console.log(err)
    }
}

const LoginUser = async (req, res) => {
    try{

        if(req.body.email && req.body.password){

            const user = await userModel.findOne(req.body)
        if(user){
            res.send(user)

        }
        else{
            res.send(
                {error:  "User not found"}
              )
        }
        
    }
    else {
        res.send({err:"Email not found"})
    }

    }catch(err){
        console.log(err)

    }

}




module.exports = {registerUser, LoginUser}