import React from 'react'
import { products } from '../../data/data'
import { activeAdisyonData } from '../../data/data'

const DataTableF = ({ selectedData, isOpen, isOpenPrice, activeAdisyon, tableData, selectedProduct, selectedActiveAdision }) => {
  return (
    <>




      <div className='  '>
        <div className="">
          <table className={`w-full bg-white border border-gray-300 dark:bg-[#293B46] ${isOpenPrice && 'w-[90%]'}  `}>
            <thead>
              <tr className='bg-[#FCFCFC] dark:bg-[#293B46] dark:text-white '>
                <th className={`py-2 px-[24px] text-center `} colSpan={isOpenPrice ? "2" : "3"}>
                  <h2 className="text-2xl font-bold mb-2   ">Ozet Biligi</h2>
                </th>
              </tr>

            </thead>
            <tbody>
              {
              isOpenPrice &&
                selectedProduct.info.map((data) => (
                  <tr key={data.id} className={` `}>
                    <td className="py-4 pl-20 max-md:px-1 border-b text-gray-600 font-poppins text-base font-medium dark:text-white">
                      {data.name}
                    </td>
                    <td className="py-4 px-4 max-md:px-1 border-b text-gray-600 font-poppins text-base font-medium dark:text-white">{data.price}</td>
                  </tr>
                ))
                ||

                !isOpenPrice && activeAdisyon &&
                  selectedActiveAdision.OzetBiligi.map((data) => (
                  <tr key={data.id} className={`text-center`}>
                    <td className="py-4 px-4 border-b text-gray-600 font-poppins text-base font-medium dark:text-white">{data.name}</td>
                  </tr>
                ))
                ||

                !isOpenPrice && !activeAdisyon && 
                selectedData.OzetBiligi.map((data,index) => (
                  <tr key={data.id} className={`text-center transition-[2s] dark:bg-[#293B46] ${index % 2 === 0 ? 'bg-white' : 'bg-[#FCFCFC]'}`}>
                    <td className="py-4 px-4 max-md:px-1 border-b text-gray-600 font-poppins text-base font-medium dark:text-white">{data.name}</td>
                    <td className="py-4 px-4 max-md:px-1 border-b text-gray-600 font-poppins text-base font-medium dark:text-white">{data.number}</td>
                    <td className="py-4 px-4 max-md:px-1 border-b text-gray-600 font-poppins text-base font-medium dark:text-white">{data.percentage}</td>
                  </tr>
                ))
              }

            </tbody>


          </table>
        </div>
      </div>


    </>
  )
}

export default DataTableF