import React, { useState, useEffect } from 'react';
import NavTable from '../components/NavTable';
import DataTable from '../components/DataTable';
import { products, tableInputs } from '../../data/data';
import InfoNav from '../components/InfoNav';
import BranchOptions from '../components/BranchOptions';
import { motion } from 'framer-motion';
import BranchSubOptions from '../components/ComparisionTable';
import SubMenu from '../components/SubMenu';
import ComparisionTable from '../components/ComparisionTable';
import Menus from '../components/Menus';
import { ThemeProvider } from '../contexts/them';
import { activeAdisyonData } from '../../data/data';






const InformationPage = ({ setLoggedIn }) => {



  const url = 'liwapos.com:4681/samba.patron/Json/JsonReports?report=PTR-UnPaidTickets&startDate=null&endDate=null'

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubMenu, setisOpenSubMenu] = useState(false)
  const [isOpenPrice, setisOpenPrice] = useState(false)
  const [selectedRow, setSelectedRow] = useState(tableInputs[0] ? tableInputs[0].id : null);
  const [selectedMenu, setSelectedMenu] = useState(false);
  const [activeAdisyon, setactiveAdisyon] = useState(false)
  const [isReportOpen, setisReportOpen] = useState(false)

  const [loading, setloading] = useState(false)
  const [slectedADRow, setslectedADRow] = useState(activeAdisyonData[0] ? activeAdisyonData[0].id : null)
  const [slectedProductRow, setslectedProductRow] = useState(products[0] ? products[0].id : null)

  const [themeMode, setthemeMode] = useState('light')
  const [tableData, settableData] = useState(null);
  const [error, setError] = useState(null);




  const darkTheme = () => {
    setthemeMode('dark')
    localStorage.setItem('themeMode', 'dark');
  }

  const lightTheme = () => {
    setthemeMode('light')
    localStorage.setItem('themeMode', 'light');
  }



  useEffect(() => {
    const storedThemeMode = localStorage.getItem('themeMode');
    if (storedThemeMode) {
      setthemeMode(storedThemeMode);
    } else {

      setthemeMode('light');
    }

    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  const selectedMenuData = selectedMenu
    ? tableInputs.find((row) => row.id === selectedMenu)
    : null;


  const selectedActiveAdision = slectedADRow
    ? activeAdisyonData.find((row) => row.id === slectedADRow)
    : null;
  const selectedProduct = slectedProductRow
    ? products.find((row) => row.id === slectedProductRow)
    : null;
    const selectedData = selectedRow
    ? tableInputs.find((row) => row.id === selectedRow)
    : null;

console.log(activeAdisyon)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://liwapos.com:4681/samba.patron/Json/JsonListReports');
  //       console.log(response)
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const jsonData = await response.json();
  //       settableData(jsonData);

  //       console.log('Fetched Data:', jsonData);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!tableData) {
  //   return <div>Loading...</div>;
  // }

 

  return (
    <>




      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className='flex flex-col  items-start gap-[50px] bg-[#FFF] dark:bg-[#253238]  '>

          <InfoNav isOpenPrice={isOpenPrice} setisOpenPrice={setisOpenPrice} setactiveAdisyon={setactiveAdisyon} activeAdisyon={activeAdisyon} setLoggedIn={setLoggedIn} selectedData={selectedData} />



          <div className={`  mx-[70px]  lg:mx-[150px] max-xl:mx-[150px] max-sm:mx-[30px] max-md:mx-[70px]  gap-[10px]   mb-20 ${isOpen && 'mx-[80px] '}  `} >
              <div className={` realtive flex gap-[10px]  max-lg:flex-col flex-shrink-0 items-stretch ${selectedMenu && 'grid grid-cols-2 gap-5 items-center max-lg:grid-cols-1'}`} >
            <NavTable
              data={tableInputs}
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
              isOpen={isOpen} setIsOpen={setIsOpen}
              isOpenPrice={isOpenPrice} setisOpenPrice={setisOpenPrice}
              selectedData={selectedData}
              activeAdisyon={activeAdisyon}
              selectedActiveAdision={selectedActiveAdision}
              selectedProduct={selectedProduct}
              setslectedADRow={setslectedADRow}
              slectedProductRow={slectedProductRow}
              setslectedProductRow={setslectedProductRow}
              slectedADRow={slectedADRow}
              tableData={tableData}
              selectedMenu={selectedMenu}
            

            />
            <Menus isOpen={isOpen} setIsOpen={setIsOpen} isReportOpen={isReportOpen} setisReportOpen={setisReportOpen}
              isOpenSubMenu={isOpenSubMenu} setisOpenSubMenu={setisOpenSubMenu} isOpenPrice={isOpenPrice} setisOpenPrice={setisOpenPrice}
               selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} setSelectedRow={setSelectedRow} activeAdisyon={activeAdisyon} />


            <DataTable isReportOpen={isReportOpen} selectedData={selectedData} isOpen={isOpen} setIsOpen={setIsOpen} isOpenPrice={isOpenPrice}
             selectedMenuData={selectedMenuData} selectedRow={selectedRow} isOpenSubMenu={isOpenSubMenu} selectedActiveAdision={selectedActiveAdision}
              selectedProduct={selectedProduct} activeAdisyon={activeAdisyon} selectedMenu={selectedMenu} />

            <ComparisionTable

              isOpenSubMenu={isOpenSubMenu}
              selectedMenu={selectedMenu}
              selectedData={selectedData}
              isOpen={isOpen} setIsOpen={setIsOpen} isOpenPrice={isOpenPrice} selectedMenuData={selectedMenuData}
              activeAdisyon={activeAdisyon} selectedRow={selectedRow}

            />
            </div>
          </div>

          <div className=' fixed right-[10rem]   mt-28 ml-[0px] flex max-lg:hidden max-[1314px]:right-[8rem] '>
            <div className='relative'>
              <div className='absolute right-[115px]' >
                <SubMenu isOpen={isOpen} data={tableInputs}
                  selectedRow={selectedRow}
                  setSelectedRow={setSelectedRow}
                  isOpenSubMenu={isOpenSubMenu}
                  setisOpenSubMenu={setisOpenSubMenu}
                  setSelectedMenu={setSelectedMenu}
                  selectedMenu={selectedMenu}
                  setIsOpen={setIsOpen}


                />
              </div>

              <div className=''>



                <BranchOptions isOpen={isOpen} setIsOpen={setIsOpen}
                  isOpenSubMenu={isOpenSubMenu} setisOpenSubMenu={setisOpenSubMenu} 
                  isOpenPrice={isOpenPrice} setisOpenPrice={setisOpenPrice} selectedMenu={selectedMenu}
                   setSelectedMenu={setSelectedMenu} activeAdisyon={activeAdisyon} setisReportOpen={setisReportOpen} />
              </div>
            </div>
          </div>





        </div>
      </ThemeProvider>
    </>
  );
};

export default InformationPage;
