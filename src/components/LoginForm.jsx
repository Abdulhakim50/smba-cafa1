import React from 'react'
import { User } from '../../data/data';
import { Navigate, Router } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginForm = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()




  const handleLogin = () => {

    const user = User.find((u) => u.name === username && u.password === password);

    if (user) {

      setLoggedIn(true);
      return navigate('/products')

    } else {

      alert('Invalid credentials');
    }
  };



  return (
    <div className=' items-center   h-screen  mx-20 max-sm:hidden max-lg:mt-20 '>
      <div className='flex items-center  max-lg:flex-col  max-lg:gap-10'>
        <div className='h-[]'>
          <div className='max-w-[1152px] h-auto'>
            <img src="src/assets/electro1.png" alt="log_img" className='max-w-full h-[70%]' />
          </div>

        </div>

        <div className='max-w-[536px] h-[400px] '>
          <form className='flex flex-col  ml-20 gap-[20px] justify-center max-lg:ml-0 '>
            <p className='text-black font-poppins text-3xl font-semibold text-center'>login</p>
            <div>
              <label htmlFor="email" className=" text-[#7C838A] font-poppins text-xs font-medium">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 p-2  br focus:outline-none  w-full borderinputs bg-[#F6F6F6] "
                placeholder="Enter your email here"
                onChange={(e) => setUsername(e.target.value)}

              />
            </div>
            <div>
              <label htmlFor="password" className=" text-[#7C838A] font-poppins text-xs font-medium ">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 br rounded-md w-full focus:outline-none  borderinputs bg-[#F6F6F6] "
                placeholder="Enter your password here"
                onChange={(e) => setPassword(e.target.value)}

              />
              <a href="" className='text-[#7b97fb] ml-[330px]'>Forgot Password?</a>
            </div>
            <button className='bg-[#4461f2] text-white p-3' onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm