import React from 'react'
import { Navigate } from 'react-router-dom';

const ProductsNav = ({setLoggedIn}) => {
  return (
    <div className='w-full bg-[#E2E8F0] '>
   <div className='flex py-5 justify-between mx-40 sm:mx-10 max-sm:mx-5 lg:mx-60'>
   <h1 className='text-[#64758B] font-poppins text-2xl font-semibold'>Liwa<span className='text-[#334155] font-poppins text-2xl font-semibold'>Soft</span></h1>
     <div onClick={()=>{setLoggedIn(false); <Navigate replace to={"/"}/>}}>Logout</div>
     </div>
    </div>
  )
}

export default ProductsNav