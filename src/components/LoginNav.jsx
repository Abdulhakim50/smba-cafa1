import React from 'react'

const LoginNav = () => {
  return (
    <div className='flex    justify-between pt-5 max-sm:hidden mx-40 sm:mx-10 max-sm:mx-5 lg:mx-60 '>
    <div>
        <h1 className='text-[#64758B] font-poppins text-2xl font-semibold'>Liwa<span className='text-[#334155] font-poppins text-2xl font-semibold'>Soft</span></h1>
    </div>

   <div className='flex gap-[25px] text-[#334155] font-poppins text-base font-medium'> 
    <p className="">Product Price</p>
    <p>Active Adisyon</p>
    <p>Login</p>
   </div>

    </div>
  )
}

export default LoginNav