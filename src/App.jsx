import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import LoginNav from './components/LoginNav'
import Routers from './router/routes'


function App() {
 

  return (
    <>
      <div>
        {/* <LoginNav/> */}
     <Routers/>
      </div>
    
    </>
  )
}

export default App
