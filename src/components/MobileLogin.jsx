import React from 'react'

const MobileLogin = () => {
    return (
        <>

<div className='max-w-[400px] mx-auto text-center relative sm:hidden'>
  <img src="src/assets/Mobile_Login.png" alt="mobile_img" className='max-w-full h-auto' />

  <div className='absolute top-0 p-5 mt-10 w-full'>
    <div className='flex flex-col gap-[89px]'>
      <div className='flex justify-between items-center'>
        <div className='text-black font-Outfit text-xl font-semibold sm:text-2xl'>Login Account</div>
        <div><img src="src/assets/turk.png" alt="turk_img" /></div>
      </div>

      <div className='flex flex-col text-center justify-center'>
        <div className='flex flex-col gap-5 sm:gap-10'>
          <div className='text-black font-Outfit text-4xl font-medium sm:text-5xl'>Login</div>
          <div>
            <form className='flex flex-col gap-4 sm:gap-20'>

              <div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 p-2 brd focus:outline-none w-full"
                  placeholder="Enter your email here"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 brd rounded-md w-full focus:outline-none"
                  placeholder="Enter your password here"
                />
                <a href="" className='mt-1 text-black font-Outfit text-xs font-normal sm:ml-[260px]'>Forgot Password?</a>
              </div>
              <button className='bg-[#4461f2] text-white p-3 brd'>Login</button>
            </form>
          </div>
        </div>
      </div>

      <div className='text-gray-600 text-center font-Roboto text-xs font-normal sm:text-base'>
        <div>V1.2.3</div>
        <div>WWW, LiwaSoft.com</div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default MobileLogin