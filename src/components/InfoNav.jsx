import React from 'react'

const InfoNav = ({ isOpenPrice, setisOpenPrice }) => {
  const sign = '<'
  return (
    <div className=' flex  w-full paddingcss justify-center items-center  gap-[20px] bg-[#E2E8F0] InfoNav'>

      <div className='flex  items-center justify-between nav'>
        <div className=' flex items-center'>
          <h3 className='text-[#64758B]'>{sign}</h3>
          <div className='flex gap-5 items-center'>
            <a href="" className=' text-[16px] text-[#64758B]'>back</a>
            <h1 className=' text-[26px] font-semibold text-[#64758B]'>Liwa<span className='text-[#334155]'>Soft</span> </h1>
          </div>
        </div>
        <div className='flex gap-[25px]'>
          <div onClick={() => setisOpenPrice(!isOpenPrice)}>Product Price</div>
          <p>Active Adisyon</p>
          <p>Logout</p>
        </div>

      </div>
    </div>



  )
}

export default InfoNav