const express = require('express');

const App = express();

const port = 5000
const cors = require('cors')

App.use(cors())

App.use(express.json());
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Ecommerce").then(()=>{
    console.log('Database connection established')
}).catch((error)=> console.log(error))

const userRoute =  require('./Routes/userRoutes')

App.use(userRoute)

App.listen(port ,()=> console.log("port listening on port " + port))