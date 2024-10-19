import React from 'react'
import { Navber } from './Components/Navber'
import { Outlet } from 'react-router-dom'
import { Footer } from './Pages/Footer'
import FirstSection from './Components/FirstSection'


export const RootLayout = () => {
  return (
   <>
   <FirstSection/>
   <Navber/>
   <Outlet/>
   <Footer/>
    </>
  )
}
