// DataTable.jsx
import React from 'react';
import { tableInputs } from '../../data/data';
import { branches } from '../../data/data';
import { useState } from 'react';
import DataTableF from './DataTableF';
import DataTableS from './DataTableS';

const DataTable = ({ selectedData, isOpen,isOpenPrice,selectedMenuData,activeAdisyon,selectedRow,tableData,selectedMenu,isOpenSubMenu,selectedActiveAdision,selectedProduct,}) => {


 
 
  return (
    <div className= {`flex flex-col gap-[50px] transition-all ${selectedMenu ? 'max-lg:mt-[0px]' : isOpenSubMenu ? 'max-lg:mt-[470px]' : isOpen ? 'max-lg:mt-[300px]' : ''}

    `}  >
        <div className={`table-auto flex flex-col justify-between items-stretch   ${isOpenPrice  && 'hidden'}    `}>
      <h2 className=" text-gray-700 font-poppins text-[28px] font-medium dark:text-white ">{selectedData.Name}</h2>
      <div className='flex gap-6 text-[#7D8398] text-[16px]'>
      <p className='text-gray-500 font-poppins text-base font-normal leading-6 dark:text-white'>{selectedData.date1}</p> 
      <p className='text-gray-500 font-poppins text-base font-normal leading-6 dark:text-white'>{ selectedData.date1}</p>
      </div>
      </div>
  
      <div className={`flex flex-col gap-10  transition-all   ${isOpen ? 'min-lg:min-w-[150px] transition-all  ' : 'lg:w-[56vw] md:w-[80vw] max-md:w-[75vw] '} `}>


      <DataTableF selectedData={selectedData} isOpen={isOpen} isOpenPrice={isOpenPrice}  activeAdisyon={activeAdisyon} selectedRow={selectedRow} tableData={tableData} selectedActiveAdision={selectedActiveAdision} selectedProduct={selectedProduct} />
      <DataTableS  selectedData={selectedData} isopen={isOpen}  isOpenPrice={isOpenPrice}  activeAdisyon={activeAdisyon} tableData={tableData}  />

      </div>
     
    </div>
  );
};

export default DataTable;
