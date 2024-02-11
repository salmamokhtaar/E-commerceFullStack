import React from 'react'
import {Link} from 'react-router-dom'

function Header() {

  const username = localStorage.getItem('user')

  const Logout = () => {
    localStorage.clear()

  }


  return (
    <div className=' bg-[#FFF7F1] border-b-2 border-gray-300'>
  <div className='flex justify-between px-10 py-5 '>
      <Link to={"/"} className='text-purple-700 text-3xl '>E-<span className='text-orange-700'>Commerce</span></Link>
       
      <ul className='flex gap-12 text-2xl mr-10 text-purple-700'>
<Link to="/"  className='hover:cursor-pointer hover:underline' >Home</Link>     
<Link to="/about" className='hover:cursor-pointer hover:underline'>About us</Link>     
      </ul>



      { 
      username ? <div className='flex gap-5' >
      <h1 className='text-black text-4xl'>Hi{JSON.parse(username).username} </h1>
      <Link to={"/login"} onClick={Logout} >LogOut</Link>
    </div>


      :

     
      <ul className=' flex gap-10 text-3xl text-orange-'>
      <Link to={"/register"} className=''>Register</Link >
      <Link to={"/login"} >Login</Link >
      </ul>
}
      </div>
      
    </div>
  )
}

export default Header
