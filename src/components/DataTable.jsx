// DataTable.jsx
import React from 'react';
import { tableInputs } from '../../data/data';
import { branches } from '../../data/data';
import { useState } from 'react';
import DataTableF from './DataTableF';
import DataTableS from './DataTableS';

const DataTable = ({ selectedData, isOpen,isOpenPrice,selectedMenuData,activeAdisyon,selectedRow,tableData,selectedMenu,isOpenSubMenu,selectedActiveAdision,selectedProduct,isReportOpen}) => {


 
 
  return (
    <div className= {`flex flex-col ml-[310px] gap-[50px] transition-all max-lg:ml-[0px] lg:mt-[100px] ${selectedMenu ? 'max-lg:mt-[0px] lg:ml-[0px]' : isOpenSubMenu || isReportOpen ? 'max-lg:mt-[485px] lg:ml-[0px]' : isOpen ? 'max-lg:mt-[300px] lg:ml-[0px]' : ''}

    `}  >
        <div className={`table-auto flex flex-col justify-between items-stretch ${isOpenPrice || activeAdisyon ? 'hidden' : ''}  `}>
      <h2 className= {`text-gray-700  text-[28px] font-[500] dark:text-white max-sm:text-[18px]  Poppins  `} >{selectedData.Name}</h2>
      <div className='flex gap-6 text-[#7D8398] text-[16px]'>
      <p className='text-gray-500  text-base font-[400] leading-6 dark:text-white max-sm:text-[14px]  Poppins '>{selectedData.date1}</p> 
      <p className='text-gray-500  text-base font-[400] leading-6 dark:text-white max-sm:text-[14px]  Poppins '>{ selectedData.date1}</p>
      </div>
      </div>
  
      <div className={`flex flex-col gap-10  transition-all max-md:w-[75vw]   ${isOpen ? 'lg:min-w-[200px] transition-all  ' : 'lg:w-[56vw] md:w-[80vw] max-md:w-[75vw] '} `}>


      <DataTableF selectedData={selectedData} isOpen={isOpen} isOpenPrice={isOpenPrice}  activeAdisyon={activeAdisyon} selectedRow={selectedRow} tableData={tableData} selectedActiveAdision={selectedActiveAdision} selectedProduct={selectedProduct} />
      <DataTableS selectedMenu={selectedMenu} selectedData={selectedData} isOpen={isOpen} isOpenPrice={isOpenPrice}  activeAdisyon={activeAdisyon} selectedRow={selectedRow} tableData={tableData} selectedActiveAdision={selectedActiveAdision} selectedProduct={selectedProduct}  />



      </div>
     
    </div>
  );
};

export default DataTable;
