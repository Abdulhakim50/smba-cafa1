// DataTable.jsx
import React from 'react';
import { tableInputs } from '../../data/data';
import { branches } from '../../data/data';
import { useState } from 'react';
import DataTableF from './DataTableF';
import DataTableS from './DataTableS';

const DataTable = ({ selectedData, isOpen,isOpenPrice,selectedMenuData,activeAdisyon,selectedRow}) => {



 
  return (
    <div className='flex flex-col gap-[50px]   '>
        <div className={`table-auto flex flex-col justify-between items-stretch    `}>
      <h2 className=" text-gray-700 font-poppins text-[28px] font-medium ">{selectedData.name}</h2>
      <div className='flex gap-6 text-[#7D8398] text-[16px]'>
      <p className='text-gray-500 font-poppins text-base font-normal leading-6'>{selectedData.date1}</p>
      <p className='text-gray-500 font-poppins text-base font-normal leading-6'>{ selectedData.date1}</p>
      </div>
      </div>
  
      <div className={`flex flex-col gap-10 min-w-[888px] ${isOpen && 'min-w-[308px]'} `}>
      <DataTableF selectedData={selectedData} isOpen={isOpen} isOpenPrice={isOpenPrice} selectedMenuData={selectedMenuData}  activeAdisyon={activeAdisyon} selectedRow={selectedRow} />
      <DataTableS  selectedData={selectedData} isopen={isOpen}  isOpenPrice={isOpenPrice}  selectedMenuData={selectedMenuData} activeAdisyon={activeAdisyon}  />

      </div>
     
    </div>
  );
};

export default DataTable;
