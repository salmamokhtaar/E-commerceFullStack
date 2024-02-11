import React from 'react'
import Header from '../Components/Header'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Login() {

  const [email,setemail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/user/login",{
        "email": email,
        "password": password,
       
    }).then((response)=>{
      if(response.data.error){
    alert("Incorrect email or password")
      }

      else{
      alert("Successfully Login")
      localStorage.setItem("user", JSON.stringify(response.data))
        navigate("/")
      }
    }).catch((error)=> console.log(error));
}




  return (
    <div>
      <Header/>
      <h2 className='text-2xl text-black  ml-[600px]  mt-10'>Login Here</h2>

      <form className=' text-center mt-10 pt-4 ml-[500px] bg-purple-700 w-[300px] h-[250px] '>
        <input  value={email} onChange={(e)=> setemail(e.target.value)} 
          className='h-10 w-[200px] mt-6 m-3 border-blue-600 border-2 pl-5' type="text" placeholder='Enter Username' />
        <input  value={password} onChange={(e)=> setPassword(e.target.value)} 
           className='h-10 w-[200px] m-3 border-lime-500 border-2 pl-5' type="text" placeholder='Enter  Password' />
        <br/>
        <button onClick={handleLogin} className='text-white bg-orange-700 px-10 py-2  rounded-md'>Register</button>
      </form>
    </div>
  )
}

export default Login
