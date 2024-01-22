import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Products from '../pages/Products'
import Login from '../pages/Login'

import InformationPage from '../pages/InformationPage'
import Prac from '../pages/prac'

const Routers = () => {
  return (
   <BrowserRouter>
     <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='products' element={<Products/>}/>
     <Route path='info' element={<InformationPage/>}/>
     <Route path='p' element={<Prac/>}/>
   
     </Routes>
   </BrowserRouter>
  )
}

export default Routers