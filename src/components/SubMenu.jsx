import React from 'react'
import classNames from 'classnames'

const SubMenu = ( {data, selectedRow, setSelectedMenu, selectedMenu,isOpen,isOpenSubMenu,setisOpenSubMenu,setIsOpen }) => {

 
 
    // You can add additional reset logic if needed

 
  return (
    <>

{ isOpenSubMenu && !selectedMenu &&

(  <div className={`max-w-[400px] absolute mt-12 border ml-[-385px] max-lg:ml-[-220px] dark:border-none ${isOpenSubMenu && 'max-sm:right-[-175px]   transition-all'} }`}>
      <h1 className='text-center pt-3 pb-3  dark:text-white  text-[#6C6F73] Poppins font-[700]'>REPORTS</h1> 
     {data.map((row) => (
       <div className={classNames('  cursor-pointer flex flex-col pt-[16px] pr-[52px] pb-[16px] pl-[5px] bg-[#FCFCFC]  dark:bg-[#293B46] max-lg:px-2 max-lg:py-2 ', {
        'bg-[#F0F3FA]': selectedRow === row.id,
      })}>
          <div
            key={row.id}
            className='  cursor-pointer flex pl-[16px] items-center gap-[20px] max-sm:pl-[8px] '
            
          
            onClick={() => {setSelectedMenu(!selectedMenu);   setSelectedMenu(row.id)} }
          >
            <div className=' flex-shrink-0 fill-current text-gray-500' dangerouslySetInnerHTML={{ __html: row.logo }}></div>
            <div className="text-[#6C6F73]  text-[14.5px] font-[500]  dark:text-white  Poppins ">{row.Name}</div>
          </div>
          </div>
        ))}
     </div> )
     }
  </>
  )
}

export default SubMenu