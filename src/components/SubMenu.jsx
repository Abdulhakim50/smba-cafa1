import React from 'react'
import { useState,useEffect } from 'react'
import { tableInputs } from '../../data/data'
import NavTable from './NavTable'
import classNames from 'classnames'

const SubMenu = ( {data, selectedRow, setSelectedMenu, selectedMenu,isOpen,isOpenSubMenu,setisOpenSubMenu, }) => {

 
 
    // You can add additional reset logic if needed

 
  return (
    <>

{ isOpenSubMenu && !selectedMenu &&

(<div className={`max-w-[400px] absolute  mt-12 border ml-[-407px]  `}>
      <h1 className='text-center pt-3 pb-3 '>REPORTS</h1> 
     {data.map((row) => (
       <div className={classNames('  cursor-pointer flex flex-col pad bg-[#FCFCFC]', {
        'bg-[#F0F3FA]': selectedRow === row.id,
      })}>
          <div
            key={row.id}
            className='  cursor-pointer flex pl-[16px] items-center gap-[20px] '
            
          
            onClick={() => {setSelectedMenu(!selectedMenu);  setSelectedMenu(row.id)} }
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className=' flex-shrink-0 fill-current text-gray-500'>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.49989 0.500244L0.50216 0.50203L0.5 8.49993H7.49989V0.500244ZM16.4976 0.50203L9.49996 0.500244V6.50016H16.5L16.4976 0.50203ZM0.5 10.4999H7.49989V16.4998L0.50216 16.4974L0.5 10.4999ZM16.5 8.49993H9.49996V16.4998L16.4976 16.4974L16.5 8.49993Z" fill="#AAAAAA"/>
</svg>
            <div className="text-gray-600  font-poppin text-base font-medium ">{row.name}</div>
          </div>
          </div>
        ))}
     </div> )
     }
  </>
  )
}

export default SubMenu