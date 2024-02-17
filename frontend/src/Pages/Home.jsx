import React from 'react'
import Header from '../Components/Header'
import Product from '../Components/Product'
import Footer from '../Components/Footer'
function Home() {
  
  return (
    <div>
        <Header/>
        {/* Waxba Ku daray */}
    <div className='grid grid-cols-[170px_950px_150px] justify-between mt-5 mb-5'>
        <div className='pl-4 h-screen'>
          <h1 className='font-bold'>Filter by Category</h1>
          <form>
            <input type='radio' name='catergory' className=''/>Mans
            <br/>
            <input type='radio' name='catergory' className=''/>Womens
            <br/>
            <input type='radio' name='catergory' className=''/>Childrens
            <br/>
            <input type='radio' name='catergory' className=''/>House items
            <br/>
            <input type='radio' name='catergory' className=''/>Sports
            <br/>
            <input type='radio' name='catergory' className=''/>Women Clothes
            <br/>
          </form>
        </div>
        <div >
          
            <Product/>
            
        </div>
        <div className='bg-purple-700 h-screen'></div>
    </div>    
    <Footer/>
    </div>

  )
}

export default Home
