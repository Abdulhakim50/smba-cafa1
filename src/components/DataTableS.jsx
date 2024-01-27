import React from 'react'

const DataTableS = ({ selectedData,isOpen,  isOpenPrice}) => {
    return (

        <>




<div >
  <div className="overflow-x-auto  ">
  <table className={`w-full bg-white border border-gray-300  dark:bg-[#293B46] `}>
      <thead>
        <tr classNameName='bg-[#FCFCFC]  '>
          <th className="py-2 px-[24px] border-b" colSpan="5">
            <h2 className="text-2xl font-bold mb-2 dark:text-white  ">Ozet Biligi</h2>
          </th>
        </tr>
        <tr classNameName='bg-[#FCFCFC]'>
          <th className="py-[24px] px-[24px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">Masa Musteri</th>
          <th className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">AdsNosipSaysis</th>
          <th className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">Durumu</th>
          <th className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">Fiyat</th>
          <th className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">Toplam</th>
        </tr>
      </thead>
      <tbody>
        <tr className= {`text-center `} > 
             <td className=" py-[24px] px-[24px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white ">{selectedData.MasaMusteri}</td>
             <td className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white ">{selectedData.AdsNoipSaysis}</td>
             <td className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium  dark:text-white">{selectedData.Durumu}</td>
             <td className="py-2 px-[24px] border-b  text-gray-600 font-poppins text-base font-medium dark:text-white">{selectedData.Fiyat}</td>
             <td className=" py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">{selectedData.Toplam}</td>
       
        </tr>
      </tbody>
    </table>
  </div>
</div>
           
        </>
    )
}

export default DataTableS