// NavTable.jsx
import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { products } from '../../data/data'
import { activeAdisyonData } from '../../data/data';

const NavTable = ({ data, selectedRow, setSelectedRow, isOpen, isOpenPrice, selectedData, activeAdisyon , slectedADRow,slectedProductRow}) => {
  return (
    <>

      <div className={` lg:fixed h-full w-[300px] bg-[#FCFCFC] dark:bg-[#293B46] dark:border-none  lg:mt-[100px]  transition-[30s] max-lg:hidden ${isOpen && 'hidden transition-[30s] '}   `}>
        <h1 className='text-center pt-16 pb-3  font-[700] bg-white dark:bg-[#293B46]  dark:text-white text-[#6C6F73] tablenavborder border-b-[#FCFCFC]  Poppins '>{isOpenPrice && 'PRODUCTS' || activeAdisyon && 'ACIK ADISIYONLAR' || 'REPORTS'}</h1>
        {
          isOpenPrice && products.map((row) => (
            <div className={classNames('  w-full  py-[15px] dark:bg-[#293B46] cursor-pointer hover:bg-[#E2E8F0] flex flex-col   ', {
              'bg-[#E2E8F0]': slectedProductRow === row.id,
            
            })}>
              <div
                key={row.id}
                className='  cursor-pointer flex pl-[16px] items-center gap-[40px]  dark:bg-[#293B46] '


              
              >
               <div className=' flex-shrink-0 fill-current text-gray-500' dangerouslySetInnerHTML={{ __html: row.logo }}></div>
            
                <div className="text-[#6C6F73] text-base font-medium dark:text-white Poppins ">{row.name}</div>
              </div>
            </div>
          ))

          ||

          activeAdisyon &&
          activeAdisyonData.map((row) => (
            <div className={classNames('  w-full   py-[15px] dark:bg-[#293B46] hover:bg-[#E2E8F0] cursor-pointer flex flex-col   ', {
              'bg-[#E2E8F0] ': slectedADRow === row.id,
            
            })}>
              <div
                key={row.id}
                className='  cursor-pointer flex pl-[40px] items-center gap-[20px]  dark:bg-[#293B46] '


              
              >
               <div className=' flex-shrink-0 fill-current text-gray-500' dangerouslySetInnerHTML={{ __html: row.logo }}></div>
            
                <div className="text-[#6C6F73] text-base font-medium dark:text-white Poppins ">{row.name}</div>
              </div>
            </div>
          ))
          ||
          selectedData && data.map((row) => (
            <div className={classNames('  w-full py-[10px] dark:bg-[#293B46]  hover:bg-[#E2E8F0] cursor-pointer flex flex-col   ', {
              'bg-[#E2E8F0] dark:bg-[#293B46]': selectedRow === row.id,
            
            })}>
              <div
                key={row.id}
                className='  cursor-pointer flex pl-[16px] items-center gap-[20px]  dark:bg-[#293B46] '


                onClick={() => setSelectedRow(row.id)}
              >
               <div className=' flex-shrink-0 fill-current text-gray-500' dangerouslySetInnerHTML={{ __html: row.logo }}></div>
            
                <div className="text-[#6C6F73] text-base font-medium dark:text-white Poppins ">{row.Name}</div>
              </div>
            </div>
          ))

        }
      </div>




    </>
  );
};

export default NavTable;