import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
    <>
        <Navbar />
        <div className='main-container'>
          <Sidebar />
          <Outlet className='layout-outlet'/>
        </div>
    </>
  )
}

export default Layout
