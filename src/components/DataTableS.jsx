import React from 'react'

const DataTableS = ({ selectedData,isOpen,  isOpenPrice}) => {
    return (

        <>




<div class={``}>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className='bg-[#FCFCFC]'>
          <th class="py-2 px-[24px] border-b" colSpan="5">
            <h2 class="text-2xl font-bold mb-2 ">Ozet Biligi</h2>
          </th>
        </tr>
        <tr className='bg-[#FCFCFC]'>
          <th class="py-[24px] px-[24px] border-b text-gray-600 font-poppins text-base font-medium">Masa Musteri</th>
          <th class="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium">AdsNosipSaysis</th>
          <th class="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium">Durumu</th>
          <th class="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium">Fiyat</th>
          <th class="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium">Toplam</th>
        </tr>
      </thead>
      <tbody>
        <tr className= {`text-center `} > 
             <td className=" py-[24px] px-[24px] border-b text-gray-600 font-poppins text-base font-medium ">{selectedData.MasaMusteri}</td>
             <td className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium ">{selectedData.AdsNoipSaysis}</td>
             <td className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium ">{selectedData.Durumu}</td>
             <td className="py-2 px-[24px] border-b  text-gray-600 font-poppins text-base font-medium">{selectedData.Fiyat}</td>
             <td className=" py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium">{selectedData.Toplam}</td>
       
        </tr>
      </tbody>
    </table>
  </div>
</div>
           
        </>
    )
}

export default DataTableS