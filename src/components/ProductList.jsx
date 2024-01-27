import React from 'react'
import { Products } from '../../data/data'
import { branches } from '../../data/data'

const ProductList = () => {
  return (

    <>
    <div className='mx-40 sm:mx-10 max-sm:mx-5 lg:mx-60   p-3 w-[150px] '>
    <p > Total Branches</p>
    <hr className='bg-blue-500 h-1 w-full' />
    </div>
    <div className='grid sm:grid-cols-3 grid-cols-2  items-center mx-40 sm:mx-10 max-sm:mx-5  lg:mx-60  gap-5 mb-40 max-md:mx-0'> 
  {Products.map((product)=>(
    <a href="/info">
    <div className='flex flex-col shadow-md rounded-md  ' > 
  <div className='flex flex-col shadow-md rounded-md image-container'> 
  <div className='flex flex-col'>
  <div className='image-container flex flex-col'>
    <img
      src={product.src1}
      alt=""
      className='h-52'
    />
    <img
      src={product.src}
      alt=""
      className='h-52 overlay-image'
    />
  </div>
</div>
</div>
    <div className='py-5 ml-5 text-[#adb1b6] flex flex-col gap-3 max-sm:gap-1'>
      
      <div className=''>
      <p className=''>{product.name}</p>
      <hr  className='h-1 w-[30%]'/>
      </div>
      <p  >Lisans:<span className='text-[#5BCD6E]'>{product.Lisans}</span></p>
      <p>Bitistarihi:{product.Bitistarihi}</p>
      <p className='text-[#8cc4f7]'>{product.desc}</p>
    </div>
    </div>
    </a>
  ))}
    </div>
    </>
  )
}

export default ProductList