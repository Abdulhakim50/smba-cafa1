import React from 'react'

const LoginNav = () => {
  return (
    <div className='flex  items-center   justify-between pt-5 max-sm:hidden mx-40 sm:mx-10 max-sm:mx-5 lg:mx-60 '>
    <div>
        <h1 className='text-[#64758B]  text-[28.58px]  Poppins font-[600]'>Liwa<span className='text-[#334155] font-poppins text-2xl  text-[28.58px]  Poppins font-[600]'>Soft</span></h1>
    </div>

   <div className='flex gap-[25px] text-[#334155]  text-base font-medium'> 
    <p className="Poppins font-[500] text-[15.58px]">Product Price</p>
    <p className='Poppins font-[500]  text-[15.58px]'>Active Adisyon</p>
    <p className='Poppins font-[500]  text-[15.58px]'>Login</p>
   </div>

    </div>
  )
}

export default LoginNav