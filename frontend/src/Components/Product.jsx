import React from 'react'
import { useState,useEffect,useRef } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Product() {
  const [data, setdata] = useState([])

  const handleProducts = () => {
    axios.get("http://localhost:5000/product/read").then((response)=> {
      setdata(response.data);
    }).catch((error)=> console.log(error))
  }

  useEffect(()=> {
    handleProducts();
  },[])

  return ( <div  className=' grid grid-cols-3 gap-5 mx-3  justify-center '>
      
        {
          data.map((item)=> {
            return  <Link to={`/order/${item._id}`}>
          <div className='border-2 p-2 border-black w-full text-black'>

          <img className='w-full h-[200px] rounded' src={`http://localhost:5000/images/${item.image} `} />

          <div className='flex justify-between'>
          <h1 className='font-bold'>{item.name}</h1>
          <h1 className='font-bold mr-2'>{item.price}</h1>
          </div>
          <p className='text-semibold'>{item.description}</p>
          <button className='bg-purple-500 px-4  text-[20px]  text-white rounded py-2 mt-2'>Buy now</button>

          </div>
          
          </Link>
        })
        
        

}
      </div>

    

  )
}

export default Product
