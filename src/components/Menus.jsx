import React from 'react'
import { useState } from 'react';
import { tableInputs } from '../../data/data';
import classNames from 'classnames';
import { activeAdisyonData } from '../../data/data';
import { products } from '../../data/data';
import { branches } from '../../data/data';
import BranchOptions from './BranchOptions';
import SubMenu from './SubMenu';
import { TiDeleteOutline } from 'react-icons/ti';

const Menus = ({ isOpen,setIsOpen,isOpenSubMenu, setisOpenSubMenu, isOpenPrice, selectedMenu, setSelectedMenu, activeAdisyon,setSelectedRow,isReportOpen,setisReportOpen }) => {


    const toggleDropdown = () => {
        setisReportOpen(!isReportOpen);
       
      };
    return (
        <div className= {`mx-[0px] lg:mx-[150px] max-sm:mx-[30px] max-md:ml-[70px] flex justify-between  w-[70vw] lg:hidden`} >
         <div className={`text-left ${  activeAdisyon ? 'hidden' : isOpenPrice  && 'hidden' } `}  >
        

   
      
          <>
            <div className={`transition-all ${isOpen && 'hidden'}`}>
              <button
                type="button"
                className=" inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 "
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={toggleDropdown}
              >
                Reports
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div>
              {isReportOpen && (

                <div
                  className=" absolute  mt-2 w-56   bg-[#FCFCFC] "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1  flex flex-col" role="none">
                    {
                      tableInputs.map((row) => (
                        <div  onClick={() => {setSelectedRow(row.id); setisReportOpen(!isReportOpen)} } className='pl-4 py-3 bordb '>{row.name}</div>
                      ))
                    }
                  </div>
                </div>
              )}
            </div>
          </>
         
      </div>

            <div className='relative'>
                <div className='absolute left-[-75px]'>
            <SubMenu isOpenSubMenu={isOpenSubMenu} selectedMenu={selectedMenu} data={tableInputs} setSelectedMenu={setSelectedMenu}/>
            </div>
            <div className=''>
           <BranchOptions isOpen={isOpen} setIsOpen={setIsOpen} setisOpenSubMenu={setisOpenSubMenu}  selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} isOpenSubMenu={isOpenSubMenu}/>
           </div>
           </div>
          </div>
    )
}

export default Menus