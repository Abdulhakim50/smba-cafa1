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
    <div className=' mx-20 max-sm:hidden max-lg:mt-20 '>
      <div className='flex  items-center mt-14  max-lg:flex-col    max-lg:gap-10'>
      
          <div className=' h-auto  lg:h-[550px] '>
            <img src="src/assets/electro1.png" alt="log_img" className='w-full h-full' />
          </div>

     

        <div className='max-w-[536px] mb-[90px] '>
          <form className='flex flex-col  ml-20 gap-[20px] justify-center max-lg:ml-0 w-[95%] '>
            <p className='text-black font-poppins text-[33.46px] font-[600] text-center Poppins'>login</p>
            <div>
              <label htmlFor="email" className=" text-[#7C838A]  text-xs font-medium Poppins">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 p-2  br focus:outline-none  w-full borderform bg-[#F6F6F6] "
                placeholder="Enter your email here"
                onChange={(e) => setUsername(e.target.value)}

              />
            </div>
            <div className=''>
              <label htmlFor="password" className=" text-[#7C838A] font-poppins text-xs font-medium Poppins">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 br rounded-md w-full focus:outline-none  borderform bg-[#F6F6F6] "
                placeholder="Enter your password here"
                onChange={(e) => setPassword(e.target.value)}

              />
              <a href="" className='text-[#7b97fb] Poppins  float-end    '>Forgot Password?</a>
            </div>
            <button className='bg-[#4461f2] text-white p-3 font-medium Poppins' onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm