import React from 'react'

const MobileLogin = () => {
    return (
        <>

<div className='max-w-[625px] mx-auto text-center relative sm:hidden'>
  <img src="src/assets/Mobile_Login.png" alt="mobile_img" className='w-full h-auto ' />

  <div className='absolute top-0 p-5 mt-10 w-full'>
    <div className='flex flex-col gap-[89px] min-[372px]:gap-[120px] min-[444px]:gap-[140px] min-[500px]:gap-[160px] min-[520px]:gap-[300px]'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-1 items-center'>
        <div className='text-black font-Outfit text-xl font-semibold sm:text-2xl Poppins'>Login Account</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M11 13.75C14.0376 13.75 16.5 11.2876 16.5 8.25C16.5 5.21243 14.0376 2.75 11 2.75C7.96243 2.75 5.5 5.21243 5.5 8.25C5.5 11.2876 7.96243 13.75 11 13.75Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
<path d="M2.66309 18.5617C3.50833 17.0987 4.72371 15.8838 6.18711 15.0392C7.65052 14.1946 9.31042 13.75 11.0001 13.75C12.6897 13.75 14.3496 14.1947 15.813 15.0393C17.2764 15.884 18.4917 17.0988 19.3369 18.5619" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
        <div className='flex gap-1 items-center'>
          <img src="src/assets/turk.png" alt="turk_img" />
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
  <g opacity="0.65">
    <path d="M0.819686 3.18291L5.14986 8.43691C5.3314 8.63994 5.64937 8.63994 5.83092 8.43691L10.1826 3.18291C10.4447 2.88857 10.2363 2.42236 9.84205 2.42236H1.16129C0.765975 2.42236 0.556502 2.88857 0.819686 3.18291Z" fill="black"/>
  </g>
</svg>
          </div>
      </div>

      <div className='flex flex-col text-center justify-center'>
        <div className='flex flex-col gap-5 sm:gap-10 '>
          <div className='text-black font-Outfit text-4xl font-medium sm:text-5xl Poppins'>Login</div>
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
              <div className='flex flex-col gap-10 relative'>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 brd rounded-md w-full focus:outline-none "
                  placeholder="Enter your password here"
                />
                <a href="" className='mt-1 text-black font-Outfit text-xs font-normal  absolute  right-0 bottom-[75px] Outfit'>Forgot Password?</a>
             
              <button className='bg-[#4461f2] text-white p-3 brd Poppins'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className=' flex flex-col gap-1 text-gray-600 text-center font-Roboto text-xs font-normal sm:text-base'>
        <div className='Roboto text-[20px] font-[400] text-[#7C838A]'>v1.2.3</div>
        <div className='Roboto text-[20px] font-[400] text-[#7C838A]'>www.liwasoft.com</div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default MobileLogin