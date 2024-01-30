import React from 'react'
import DataTableF from './DataTable'
import { activeAdisyonData } from '../../data/data'


const ComparisionData = ({ selectedData, isOpen, isOpenPrice, selectedMenuData, activeAdisyon, selectedRow }) => {

  return (
    <div className='grid grid-cols-1 gap-10 lg:mt-[110px]     '>

      <div className={`table-auto flex flex-col justify-between items-stretch    `}>
        <h2 className=" text-gray-700  text-[28px] font-[500] dark:text-white max-sm:text-[18px]  Poppins ">{selectedMenuData?.Name}</h2>
        <div className='flex gap-6 text-[#7D8398] text-[16px]'>
          <p className='text-gray-500  text-base font-[400] leading-6 dark:text-white max-sm:text-[14px]  Poppins '>{selectedMenuData?.date1}</p>
          <p className='text-gray-500  text-base font-[400] leading-6 dark:text-white max-sm:text-[14px]  Poppins '>{selectedMenuData?.date1}</p>
        </div>
      </div>

      <div className=''>
        <div className="">
          <table className={`w-full bg-white border border-gray-300 dark:bg-[#293B46] `}>
            <thead>
              <tr className='bg-[#FCFCFC] dark:bg-[#293B46] dark:text-white'>
                <th className={`py-2 px-[24px] `} border-b colSpan="5">
                  <h2 className="text-[20px] text-[#636769] mb-2 font-[500]   Poppins ">Ozet Biligi</h2>
                </th>
              </tr>

            </thead>
            <tbody>



              {
                selectedMenuData &&
                selectedMenuData.OzetBiligi.map((data, index) => (
                  <tr key={data.id} className={`text-center transition-[2s] dark:bg-[#293B46]  ${index % 2 === 0 ? 'bg-white' : 'bg-[#FCFCFC]'}`}>
                    <td className="py-4 px-4 border-b text-gray-600 font-poppins text-base font-medium dark:text-white">{data.name}</td>
                    <td className="py-4 px-4 border-b text-gray-600 font-poppins text-base font-medium dark:text-white">{data.number}</td>
                    <td className="py-4 px-4 border-b text-gray-600 font-poppins text-base font-medium dark:text-white">{data.percentage}</td>
                  </tr>
                ))

              }

            </tbody>
          </table>
        </div>
      </div>


      <div >
        <div className="max-lg:overflow-x-auto">
          <table className={`w-full bg-white border border-gray-300 dark:bg-[#293B46] `}>
            <thead>
              <tr classNameName='bg-[#FCFCFC] '>
                <th className="py-2 px-[24px] border-b" colSpan="5">
                  <h2 className="text-[#636769]  mb-2  dark:text-white text-[20px]  font-[500]   Poppins ">Ozet Biligi</h2>
                </th>
              </tr>
             
            </thead>
            <tbody>
           
        {
        !isOpenPrice && !activeAdisyon && (

          <>
        
              <tr classNameName='bg-[#FCFCFC]'>
                <th className={`py-[24px] px-[0px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white ${isOpen && 'px-[0px]'}`}>Masa Musteri</th>
                <th className="py-2 px-[0px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">AdsNosipSaysis</th>
                <th className="py-2 px-[0px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">Durumu</th>
                <th className="py-2 px-[0px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">Fiyat</th>
                <th className="py-2 px-[0px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">Toplam</th>
              </tr>
          

       { selectedData.info.map((data)=>(
      
            <tr className= {`text-center `} > 
            <td className= {`py-[24px] px-[24px] border-b text-gray-600 Poppins text-base font-medium dark:text-white ${isOpen && 'px-[0px]'}`} >{data.MasaMusteri}</td>
            <td className="py-2 px-[24px] border-b text-gray-600 Poppins text-base font-medium dark:text-white ">{data.AdsNoipSaysis}</td>
            <td className="py-2 px-[24px] border-b text-gray-600 Poppins text-base font-medium  dark:text-white">{data.Durumu}</td>
            <td className="py-2 px-[24px] border-b  text-gray-600 Poppins text-base font-medium dark:text-white">{data.Fiyat}</td>
            <td className=" py-2 px-[24px] border-b text-gray-600 Poppins text-base font-medium dark:text-white">{data.Toplam}</td>
      
       </tr>

    
        ))}
           </>
        )}
            </tbody>
          </table>
        </div>
      </div>



    </div>
  )
}

export default ComparisionData