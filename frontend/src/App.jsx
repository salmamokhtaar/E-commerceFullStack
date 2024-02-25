import React from 'react'
import Home from './Pages/Home'
import Login  from './Pages/Login'
import Register from './Components/Register'
import { Route,Routes } from 'react-router-dom'
import Aboutus from './Pages/Aboutus'
import Order from './Components/Order'
import Dashboard from './Pages/Dashboard'
import AddProducts from './Components/AddProducts'
function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}     />
      <Route path='/login' element = {<Login/>}     />
      <Route path='/register' element = {<Register/>}     />
      <Route path='/about' element = {<Aboutus/>}     />
      <Route path='/order/:id' element = {<Order/>}     />
      {/* admin */}
      <Route path='/dashboard' element = {<Dashboard/>}     />
      <Route path='/addproduct' element = {<AddProducts/>}     />

    </Routes>
  )
}

export default App
