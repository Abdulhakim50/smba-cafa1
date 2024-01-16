import React from 'react'
import { products } from '../../data/data'

const DataTableF = ({ selectedData, isOpen, isOpenPrice }) => {
  return (
    <>




      <div >
        <div class="overflow-x-auto">
          <table class={`min-w-[888px] bg-white border border-gray-300 ${isOpen && 'min-w-[608px]'}`}>
            <thead>
              <tr className='bg-[#FCFCFC]'>
                <th class="py-2 px-[24px] border-b" colSpan="5">
                  <h2 class="text-2xl font-bold mb-2 ">Ozet Biligi</h2>
                </th>
              </tr>

            </thead>
            <tbody>

              {
                isOpenPrice ? products.map((data) => (
                  <>
                    <tr className={`text-center `} >
                      <td className=" py-[24px] px-[24px] border-b text-gray-600 font-poppins text-base font-medium ">{data.name}</td>
                      <td className=" py-[24px] px-[24px] border-b text-gray-600 font-poppins text-base font-medium ">{data.price}</td>
                    </tr>
                  </>

                ))
                  :
               
                  
                  selectedData.OzetBiligi.map((data) => (
                    
                    <tr key={data.name} className="text-center">
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



    </>
  )
}

export default DataTableF