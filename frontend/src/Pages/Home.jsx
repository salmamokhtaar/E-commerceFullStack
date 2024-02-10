import React from 'react'
import Header from '../Components/Header'
import Product from '../Components/Product'
import Footer from '../Components/Footer'
function Home() {
  return (
    <div>
        <Header/>
    <div className='grid grid-cols-[170px_950px_150px] justify-between mt-5'>
        <div className='pl-4 h-screen'>
          <h1 className='font-bold'>Filter by Category</h1>
          <form>
            <input type='radio' name='catergory' className=''/>Sports
            <br/>
            <input type='radio' name='catergory' className=''/>Women Clothes
            <br/>
            <input type='radio' name='catergory' className=''/>Sports
            <br/>
            <input type='radio' name='catergory' className=''/>Women Clothes
            <br/>
            <input type='radio' name='catergory' className=''/>Sports
            <br/>
            <input type='radio' name='catergory' className=''/>Women Clothes
            <br/>
          </form>
        </div>
        <div className='bg-gray-500  grid-cols-3 h-screen justify-center grid'>
            <Product/>
            <Product/>
            <Product/>
        </div>
        <div className='bg-purple-700 h-screen'></div>
    </div>    
    <Footer/>
    </div>

  )
}

export default Home
