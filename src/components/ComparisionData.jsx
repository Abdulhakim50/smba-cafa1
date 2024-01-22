import React from 'react'
import DataTableF from './DataTable'
import { activeAdisyonData } from '../../data/data'


const ComparisionData = ({selectedData, isOpen,isOpenPrice,selectedMenuData,activeAdisyon,selectedRow}) => {

  return (
    <div className='flex flex-col gap-10 mt-[10px]'>

<div className={`table-auto flex flex-col justify-between items-stretch    `}>
      <h2 className=" text-gray-700 font-poppins text-[28px] font-medium ">{selectedMenuData?.name}</h2>
      <div className='flex gap-6 text-[#7D8398] text-[16px]'>
      <p className='text-gray-500 font-poppins text-base font-normal leading-6'>{selectedMenuData?.date1}</p>
      <p className='text-gray-500 font-poppins text-base font-normal leading-6'>{ selectedMenuData?.date1}</p>
      </div>
      </div>
       
       <div className=''>
        <div className="overflow-x-auto"> 
          <table className={`w-full bg-white border border-gray-300 `}>
            <thead>
              <tr className='bg-[#FCFCFC]'>
                <th className={`py-2 px-[24px] `} border-b colSpan="5">
                  <h2 className="text-2xl font-bold mb-2 ">Ozet Biligi</h2>
                </th>
              </tr>

            </thead>
            <tbody>

 

{
 selectedMenuData &&
   selectedMenuData.OzetBiligi.map((data) => (
      <tr key={data.name} className={`text-center`}>
        <td className="py-4 px-4 border-b text-gray-600 font-poppins text-base font-medium">{data.name}</td>
        <td className="py-4 px-4 border-b text-gray-600 font-poppins text-base font-medium">{data.number}</td>
        <td className="py-4 px-4 border-b text-gray-600 font-poppins text-base font-medium">{data.percentage}</td>
      </tr>
    ))
  
}








            </tbody>
          </table>
        </div>
      </div>


      <div >
  <div className="overflow-x-auto">
  <table className={`w-full bg-white border border-gray-300  `}>
      <thead>
        <tr classNameName='bg-[#FCFCFC]'>
          <th className="py-2 px-[24px] border-b" colSpan="5">
            <h2 className="text-2xl font-bold mb-2 ">Ozet Biligi</h2>
          </th>
        </tr>
        <tr classNameName='bg-[#FCFCFC]'>
          <th className="py-[24px] px-[24px] border-b text-gray-600 font-poppins text-base font-medium">Masa Musteri</th>
          <th className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium">AdsNosipSaysis</th>
          <th className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium">Durumu</th>
          <th className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium">Fiyat</th>
          <th className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium">Toplam</th>
        </tr>
      </thead>
      <tbody>
        <tr className= {`text-center `} > 
             <td className=" py-[24px] px-[24px] border-b text-gray-600 font-poppins text-base font-medium ">{selectedMenuData?.MasaMusteri}</td>
             <td className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium ">{selectedMenuData?.AdsNoipSaysis}</td>
             <td className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium ">{selectedMenuData?.Durumu}</td>
             <td className="py-2 px-[24px] border-b  text-gray-600 font-poppins text-base font-medium">{selectedMenuData?.Fiyat}</td>
             <td className=" py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium">{selectedMenuData?.Toplam}</td>
       
        </tr>
      </tbody>
    </table>
  </div>
</div>



    </div>
  )
}

export default ComparisionData