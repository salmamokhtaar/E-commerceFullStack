import React from 'react'
import {Link} from 'react-router-dom'

function SideNav() {
  return (
    <div className='bg-purple-500 border-r-2 border-black w-[20%] flex flex-col h-screen fixed text-white text-3xl space-y-8 pl-10 pt-10'>
        <Link to="/dashboard"><i class="fa-solid fa-house"></i> Dashboard</Link>
        <Link to="/products"><i class="fa-brands fa-product-hunt"></i> Products</Link>
        <Link to="/addproduct"><i class="fa-solid fa-cart-plus"></i> Add Product</Link>
        <Link><i class="fa-solid fa-bell"></i> Orders</Link>
        <Link><i class="fa-solid fa-right-from-bracket"></i> LogOut</Link>
      
    </div>
  )
}

export default SideNav
