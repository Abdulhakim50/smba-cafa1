import React from 'react'
import { Products } from '../../data/data'
import { branches } from '../../data/data'
import { Suspense } from 'react'
import { useState, useEffect } from 'react'


const ProductList = () => {


  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);


  const ProductSkeleton = () => (
   

      <a href="/info" className='flex flex-col  rounded-md bg-white p-4 fade-container'>
        <div className='flex flex-col shadow-md rounded-md image-container'>
          <div className='flex flex-col'>
            <div className='image-container flex flex-col'>
              <div className='skeleton-image h-52 max-sm:h-40 bg-gray-300 fade'></div>
              <div className='skeleton-image overlay-image h-52 bg-gray-400 fade'></div>
            </div>
          </div>
        </div>
        <div className='ml-0 text-gray-600 flex flex-col gap-3 max-sm:gap-1'>
          <div className=''>
          <div className=' rounded-md w-[150px] h-[20px] bg-gray-300 mt-2 mb-3 fade'>
          
          </div>
          <div className=' rounded-md w-[155px] h-[15px] bg-gray-300 mt-2 mb-3 fade'>
          
          </div>
          <div className=' rounded-md w-[160px] h-[15px] bg-gray-300 mt-2 mb-3 fade'>
          
          </div>
          <div className=' rounded-md w-[170px] h-[15px] bg-gray-300 mt-2 mb-3 fade'>
          
          </div>
          </div>
       

        </div>
      </a>
  
  );


  useEffect(() => {

    const fetchData = () => {
      setTimeout(() => {


        setProducts(Products);
        setIsLoading(false);
      }, 4000);
    };

    fetchData();
  }, []);

  return (

    <>

      <div className='mx-40 sm:mx-10 max-sm:mx-5 lg:mx-60   p-3 w-[150px] '>
        <p className='Poppins' > Total Branches</p>
        <hr className='bg-blue-500 h-1 w-full' />
      </div>
      <div className='grid sm:grid-cols-3 grid-cols-2  items-center mx-40 sm:mx-10 max-sm:mx-5  lg:mx-60  gap-5 mb-40 max-md:mx-0'>


        {
          isLoading ? (

            Array.from({ length: 6 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          ) : (

            products.map((product) => (

              <a href="/info">
                <div className='flex flex-col shadow-md rounded-md  ' >
                  <div className='flex flex-col shadow-md rounded-md image-container'>
                    <div className='flex flex-col'>
                      <div className='image-container flex flex-col'>
                        <img
                          src={product.src1}
                          alt=""
                          className='h-52 max-sm:h-40 '
                        />
                        <img
                          src={product.src}
                          alt=""
                          className='h-52 max-sm:h-40 overlay-image'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='py-5 ml-5 text-[#adb1b6] flex flex-col gap-3 max-sm:gap-1'>

                    <div className=''>
                      <p className='Poppins font-[500] text-[15px]'>{product.name}</p>
                      <hr className='h-1 w-[30%]' />
                    </div>
                    <p className='Poppins font-[500] text-[14px]' >Lisans:<span className='text-[#5BCD6E] Poppins text-[14px]'>{product.Lisans}</span></p>
                    <p className='Poppins font-[500] text-[14px]'>Bitis tarihi:{product.Bitistarihi}</p>
                    <p className='text-[#8cc4f7] Poppins font-[500] text-[14px]'>{product.desc}</p>
                  </div>
                </div>
              </a>

            )))}

      </div>

    </>
  )
}

export default ProductList