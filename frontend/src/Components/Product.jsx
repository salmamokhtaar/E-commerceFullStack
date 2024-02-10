import React from 'react'

function Product() {
  return (
    <div>
      <div className='border-2 p-2 border-black w-[250px] text-white'>
        <img className='w-full' src="https://img.freepik.com/free-psd/chromatees-tshirt-mockup_126278-20.jpg?size=626&ext=jpg&ga=GA1.2.51471150.1675622090&semt=sph" alt="" />

        <div className='flex justify-between'>
        <h1 className='font-bold'>T-shirt</h1>
        <h1 className='font-bold'>$20</h1>
        </div>

        <p className='text-semibold'>Lorem ipsum dolor sit amet.</p>
        <button className='bg-blue-700 px-4  text-[20px] rounded py-2 mt-2'>Buy now</button>
      </div>
    </div>
  )
}

export default Product
