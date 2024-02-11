import React from 'react'
import Header from '../Components/Header'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
const navigate = useNavigate()

  const handlePost = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/user/register",{
        "email": email,
        "username": username,
        "password": password,
    }).then(()=>{
        alert("Registered..");
        navigate("/login")
        
    }).catch((error)=> console.log(error));
}


  return (
    <div>
        <Header/>
<div>
<h1 className='mt-8 font-bold ml-[600px]'>Register </h1>
    <form className=' text-center mt-10 pt-4 ml-[500px] bg-purple-700 w-[300px] h-[330px] '>
        <input value={email} onChange={(e)=> setEmail(e.target.value)}   className='h-10 w-[200px] m-3 border-blue-600 border-2 pl-5' type="text" placeholder='Enter email' />
        <input   value={username} onChange={(e)=> setUsername(e.target.value)}  
          className='h-10 w-[200px] m-3 border-lime-500 border-2 pl-5' type="text" placeholder='Enter  Username' />
        <br/>
        <input  value={password} onChange={(e)=> setPassword(e.target.value)}  
          className='h-10 w-[200px]  m-3 border-rose-500 border-2 pl-5' type="text" placeholder='Enter  Password' />
      <br/>
        <button onClick={handlePost} className='text-white bg-orange-700 px-10 py-2  rounded-md'>Register</button>
      </form>
</div>
       
    </div>
  )
}

export default Register
