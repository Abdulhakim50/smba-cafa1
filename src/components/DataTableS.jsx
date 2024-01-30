import React from 'react'

const DataTableS = ({selectedData, isOpen, isOpenPrice, activeAdisyon, tableData, selectedProduct, selectedActiveAdision,selectedMenu }) => {
    return (

        <>




<div >
  <div className="  ">
  <table className={`w-full bg-white border border-gray-300  dark:bg-[#293B46] `}>
      <thead>
        <tr classNameName='bg-[#FCFCFC]  '>
          <th className="py-2 px-[24px] border-b" colSpan="5">
            <h2 className="text-[20px] font-[500] mb-2 dark:text-white  Poppins text-[#636769]  ">{ isOpenPrice   && ' Adision  Etiknikleri'   || activeAdisyon && 'Adision  Etiknikleri'  || 'Açık Adisyon Detaylar'}</h2>
          </th>
        </tr>
       
      </thead>
      <tbody>
      {
              isOpenPrice &&
                selectedProduct.info2.map((data,index) => (
                  <tr key={data.id} className={`  ${index % 2 === 0 ? 'bg-white dark:bg-[#293B46]' : 'bg-[#FCFCFC] dark:bg-[#293B46]'}`}>
                    <td className="py-4 pl-20 max-md:px-1 border-b text-gray-600  text-base font-medium dark:text-white">
                      {data.name}
                    </td>
                    <td className="py-4 px-4 max-md:px-1 border-b text-gray-600  text-base font-medium dark:text-white  Poppins">{data.price}</td>
                  </tr>
                ))}
        {
        !isOpenPrice && !activeAdisyon && (

          <>
        
              <tr classNameName='bg-[#FCFCFC]'>
                <th className={`py-[24px] px-[20px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white ${isOpen && 'px-[0px]'} ${selectedMenu && 'px-[0px]'}`}>Masa Musteri</th>
                <th className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">AdsNosipSaysis</th>
                <th className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">Durumu</th>
                <th className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">Fiyat</th>
                <th className="py-2 px-[24px] border-b text-gray-600 font-poppins text-base font-medium dark:text-white">Toplam</th>
              </tr>
          

       { selectedData.info.map((data)=>(
      
            <tr className= {`text-center `} > 
            <td className= {`py-[24px] px-[24px] border-b text-gray-600 Poppins text-base font-medium dark:text-white ${isOpen && 'px-[0px]'} ${selectedMenu && 'px-[0px]'}`} >{data.MasaMusteri}</td>
            <td className= {`py-2 px-[24px] border-b text-gray-600 Poppins text-base font-medium dark:text-white ${isOpen && 'px-[0px]'} ${selectedMenu && 'px-[0px]'}`}>{data.AdsNoipSaysis}</td>
            <td className= {`py-2 px-[24px] border-b text-gray-600 Poppins text-base font-medium dark:text-white ${isOpen && 'px-[0px]'} ${selectedMenu && 'px-[0px]'}`}>{data.Durumu}</td>
            <td className= {`py-2 px-[24px] border-b text-gray-600 Poppins text-base font-medium dark:text-white ${isOpen && 'px-[0px]'} ${selectedMenu && 'px-[0px]'}`}>{data.Fiyat}</td>
            <td className= {`py-2 px-[24px] border-b text-gray-600 Poppins text-base font-medium dark:text-white ${isOpen && 'px-[0px]'} ${selectedMenu && 'px-[0px]'}`}>{data.Toplam}</td>
      
       </tr>

    
        ))}
           </>
        )}
          { 
                 activeAdisyon && 
               selectedActiveAdision.info.map((data,index) => (
                <tr key={data.id} className={`text-center transition-[2s] dark:bg-[#293B46] ${index % 2 === 0 ? 'bg-white' : 'bg-[#FCFCFC]'}`}>
                <td className="py-4 pl-0 max-md:px-1 border-b text-gray-600  text-base font-medium dark:text-white  Poppins">{data.name}</td>
                <td className="py-4 pl-4 max-md:px-1 border-b text-gray-600  text-base font-medium dark:text-white  Poppins">{data.number}</td>
                <td className="py-4 px-4 max-md:px-1 border-b text-gray-600  text-base font-medium dark:text-white  Poppins">{data.percentage}</td>
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

export default DataTableS