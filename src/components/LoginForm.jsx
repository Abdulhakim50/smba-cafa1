import React from 'react'

const LoginForm = () => {
  return (
    <div className=' items-center  h-screen  ml-20  '>
    <div className='flex items-center max-md:flex-col'>
        <div className='relative'>
        <div className='w-[852px] h-auto  relative'>
            <img src="src/assets/electro.png" alt="login_img" className=' justify-center  max-w-[100%]' />
        </div>
        <h2 className='absolute top-[215px] left-[80px] bg-[#003366] w-[265px] h-[265px] rounded-full text-center '></h2>
        <h2 className='absolute  top-[218px] left-[100px]  text-[110px]  font-semibold text-white'>Liwa</h2>
        <h2 className='absolute top-[315px] left-[120px] text-[105px] font-semibold text-white'>Soft</h2>
        </div>
        <div className='max-w-[436px] h-[387px]'>
            <form className='flex flex-col  ml-20 gap-[20px] justify-center'>
                <p className='font-bold text-3xl text-center'>login</p>
                <div>
                    <label htmlFor="email" className=" opacity-40">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="mt-1 p-2 border focus:outline-none focus:ring focus:border-blue-300 w-full bg-[#f6f6f6]"
                        placeholder="Enter your email here"
                    />
                </div>
                <div>
                    <label htmlFor="password" className=" opacity-40">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 bg-[#f6f6f6]"
                        placeholder="Enter your password here"
                    />
                    <a href="" className='text-[#7b97fb] ml-56'>Forgot Password?</a>
                </div>
                <button className='bg-[#4461f2] text-white p-3'>Login</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default LoginForm