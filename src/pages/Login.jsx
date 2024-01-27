import React from 'react'
import LoginNav from '../components/LoginNav'
import LoginForm from '../components/LoginForm'
import MobileLogin from '../components/MobileLogin'


const Login = ({setLoggedIn}) => {
    return (
        <div className='bg'>
        <LoginNav/>
       <LoginForm setLoggedIn={setLoggedIn}/>
       <MobileLogin/>
    </div>
    
    )
}

export default Login