import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function Order() {

  const [read, setRead] = useState([])
  const [tiro, setTiro] = useState(1)

  const params = useParams()

  const handleIncrimentTiro = () => {
    setTiro(tiro + 1)
  }
  const handledecrimentTiro = () => {
    if(tiro > 1){
  setTiro(tiro - 1)

}  }

     const handleSingleData = () => {
      axios.get(`http://localhost:5000/product/single/${params.id}`).then((response)=> {
        setRead(response.data);
      }).catch((error)=> console.log(error))
     }
     useEffect(()=> {
      handleSingleData();
    },[])
// Something Added to Orders

  return (
    <div>

      <h1 className='text-3xl text-center mt-10 text-purple-700 '>Complete your Order Here</h1>

  {
    read.map((item)=>{
      return <div className='flex justify-around items-center mt-10  '>

      <img className='w-[400px] mt-10  ml-[200px] rounded' src={`http://localhost:5000/images/${item.image} `}/>
  
  <div className='gap-5     w-[500px] mr-[70px]'>
      <h1 className='font-bold'>{item.name}</h1>
      <p className='semi-bold'>{item.description}</p>
      <h1 className='font-bold text-2xl'>${item.price *tiro}</h1>

      <div className='flex gap-5 mt-3'>
      <button onClick={handledecrimentTiro} className='w-[50px] rounded-full  bg-purple-500 text-3xl h-[50px] text-white '>-</button>

    
      <h1 className='text-4xl'>{tiro}</h1>
      <button onClick={handleIncrimentTiro} className='w-[50px] bg-purple-500 rounded-full text-3xl h-[50px] text-white '>+</button>
      </div>

      <button className=' bg-purple-200 text-red-500 px-8 py-5 mt-10 rounded  text-3xl'>CheckOut</button>
  </div>
 </div>
    })
  }




    </div>
  )
}

export default Order
