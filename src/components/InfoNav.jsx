import React from 'react'
import ReactSwitch from 'react-switch';
import useTheme from '../contexts/them';
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";

const InfoNav = ({  setisOpenPrice,setactiveAdisyon,setLoggedIn}) => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const sign = '<'

  const {themeMode,lightTheme,darkTheme}=useTheme()
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked
    if (darkModeStatus) {
        darkTheme()
    } else {
        lightTheme()
    }
}


 
  return (
    <div className='lg:fixed flex  w-full paddingcss justify-center items-center  gap-[20px] bg-[#E2E8F0] InfoNav max-lg:px-5 dark:bg-[#293B46] '>

      <div className='flex  items-center justify-between nav'>
        <div className=' flex items-center'>
          <h3 className='text-[#64758B] dark:text-white'>{sign}</h3>
          <div className='flex gap-5 items-center max-sm:gap-19 max-[374px]:gap-5 '>
            <a href="" className=' text-[16px] text-[#64758B] dark:text-white Poppins'>back</a>
            <h1 className=' text-[26px] font-semibold text-[#64758B] Poppins '>Liwa<span className='text-[#334155] font-semibold dark:text-white  Poppins'>Soft</span> </h1>
          </div>
        </div>
        <div className='flex gap-[25px] dark:text-white '>
       <div className=' flex gap-[25px] max-sm:hidden  '>
          <div onClick={() => {setisOpenPrice(true); setactiveAdisyon(false)}} className='Poppins'>Product Price</div>
          <div onClick={()=>{setactiveAdisyon(true); setisOpenPrice(false) }} className='Poppins'>Active Adisyon</div>
     
         <div onClick={()=>setLoggedIn(false)} className='Poppins'>Logout</div>
         </div>
       
      
      
         <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === 'dark'}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">{themeMode=== 'dark' ? 'Dark' : 'Light'}</span>
        </label>
        </div>
        <div className="dropdown-menu sm:hidden dark:text-white">
         <div className="menu-icon" onClick={toggleDropdown}>
           <IoMdMenu  size={30} />
         </div>
         {isDropdownOpen && (
           <div className="dropdown-content  ">
           
          <div onClick={() => {setisOpenPrice(true); setactiveAdisyon(false)}} className='Poppins'>Product Price</div>
          <div onClick={()=>{setactiveAdisyon(true); setisOpenPrice(false);  }} className='Poppins'>Active Adisyon</div>
     
             <div onClick={()=>setLoggedIn(false)} className='Poppins'>Logout</div>
           </div>
         )}
       </div>

      </div>
    </div>



  )
}

export default InfoNav