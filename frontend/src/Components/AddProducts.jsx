import React, { useState } from 'react'
import SideNav from './SideNav'
import axios from 'axios'
function AddProducts() {
    const [name , setName] = useState("")
    const [description , setDescription] = useState("")
    const [price , setPrice] = useState("")
    const [cetegory , setCetegory] = useState("")
    const [image , setImage] = useState(null)
        const RegisterProduct = (event) => {
            event.preventDefault()
            let formData = new FormData()
            formData.append("name", name)
            formData.append("price", price)
            formData.append("description", description)
            formData.append("cetegory", cetegory)
            formData.append("image", image)
            axios.post("http://localhost:5000/product/register",  formData,{
                headers : {
                    "Content-Type" : "multipart/form-data"
                }
            }).then(()=>{
                alert("Products has been saved succesfully")

            }).catch((error) => console.log(error))

        }



  return (
    <div>
        <SideNav/>
        <div className='ml-[22%] '>
            <h1 className=' ml-[195px] pt-10 font-bold text-3xl'>Add Product Here</h1>
      <form className='ml-[195px] pt-3'>
        <input value={name} onChange={(e) => setName(e.target.value)} className='w-[400px] h-[50px] border-2 border-blue-500 mt-2' type="text" placeholder="Product Name"/>
        <br/>
        <input value={price} onChange={(e) => setPrice(e.target.value)} className='w-[400px] border-2 h-[50px] border-blue-500 mt-2' type="text" placeholder="Product Description"/>
        <br/>
        <input value={description} onChange={(e) => setDescription(e.target.value)} className='w-[400px] border-2 h-[50px] border-blue-500 mt-2' type="Number" placeholder="Product Price"/>
        <br/>
        <input value={cetegory} onChange={(e) => setCetegory(e.target.value)} className='w-[400px] border-2 h-[50px] border-blue-500 mt-2' type="text" placeholder="Product Cetegory"/>
        <br/>
        <input onChange={(e) => setImage(e.target.files[0])} className='w-[400px] border-2 h-[50px] border-blue-500 mt-2' type="file" placeholder="Product Image"/>
        <br/>
        <button onClick={RegisterProduct} className='bg-blue-500 px-10 py-2 rounded text-3xl text-white mt-10'>Save</button>
      </form>
      </div>
    </div>
  )
}

export default AddProducts
