import React from 'react'
import Header from '../Components/Header'
function Login() {
  return (
    <div>
      <Header/>
      <form className=' text-center mt-10 pt-4 ml-[500px] bg-purple-700 w-[300px] h-[330px] '>
        <input className='h-10 w-[200px] m-3 border-blue-600 border-2 pl-5' type="text" placeholder='Enter Username' />
        <input  className='h-10 w-[200px] m-3 border-lime-500 border-2 pl-5' type="text" placeholder='Enter  Password' />
        <br/>
        <button className='text-white bg-orange-700 px-10 py-2  rounded-md'>Register</button>
      </form>
    </div>
  )
}

export default Login
