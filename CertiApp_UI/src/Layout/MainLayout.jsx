import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <ToastContainer /> */}
    <Footer/>
    </>
  )
}

export default MainLayout