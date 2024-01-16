import React, { useState } from 'react';
import NavTable from '../components/NavTable';
import DataTable from '../components/DataTable';
import { tableInputs } from '../../data/data';
import InfoNav from '../components/InfoNav';
import BranchOptions from '../components/BranchOptions';
import { motion } from 'framer-motion';
import BranchSubOptions from '../components/ComparisionTable';
import SubMenu from '../components/SubMenu';
import ComparisionTable from '../components/ComparisionTable';



const InformationPage = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubMenu, setisOpenSubMenu] = useState(false)
  const [isOpenPrice, setisOpenPrice] = useState(false)
  const [selectedRow, setSelectedRow] = useState(tableInputs[0] ? tableInputs[0].id : null);
  const [selectedMenu, setSelectedMenu] = useState(false);



  const selectedMenuData = selectedMenu
  ? tableInputs.find((row) => row.id === selectedMenu)
  : null;

  const selectedData = selectedRow
    ? tableInputs.find((row) => row.id === selectedRow)
    : null;

  return (
    <>


   


<div className='flex flex-col  items-start gap-[50px] bg-[#FFF]'>
    <InfoNav   isOpenPrice={isOpenPrice} setisOpenPrice={setisOpenPrice} />
    <div className='flex px-[150px]   gap-[10px] flex-shrink-0 items-stretch '>
    <NavTable
        data={tableInputs}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        isOpen={isOpen} setIsOpen={setIsOpen}
        isOpenPrice={isOpenPrice} setisOpenPrice={setisOpenPrice}
      />
       
      <DataTable selectedData={selectedData} isOpen={isOpen} setIsOpen={setIsOpen} isOpenPrice={isOpenPrice}    selectedMenuData={selectedMenuData} />
      <ComparisionTable 
     
        isOpenSubMenu={isOpenSubMenu}
        selectedMenu={selectedMenu}
        selectedData={selectedData}

     
     
     />
      </div>
      <div className=' fixed left-[1230px]  mt-24 ml-[0px] flex '>
      <SubMenu  isOpen={isOpen}  data={tableInputs}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow} 
        isOpenSubMenu={isOpenSubMenu}
        setisOpenSubMenu={setisOpenSubMenu}
        setSelectedMenu={setSelectedMenu}
        selectedMenu={selectedMenu}
     

        />  
      <BranchOptions isOpen={isOpen} setIsOpen={setIsOpen}   
        isOpenSubMenu={isOpenSubMenu}  setisOpenSubMenu={setisOpenSubMenu}      isOpenPrice={isOpenPrice} setisOpenPrice={setisOpenPrice} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
    
      </div>

    
  </div>
  </>
  );
};

export default InformationPage;
