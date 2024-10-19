import React from 'react'
import { Navber } from './Components/Navber'
import { Outlet } from 'react-router-dom'
import { Footer } from './Pages/Footer'


export const RootLayout = () => {
  return (
   <>
   <Navber/>
   <Outlet/>
   <Footer/>
    </>
  )
}
