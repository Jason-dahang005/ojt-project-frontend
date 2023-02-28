import React from 'react'
import '../assets/styles/Layout.css'
import { Outlet } from 'react-router-dom'
import Header from './Header'
const Layout = () => {
  return (
    <div className='grid-container'>
      <div className="grid-item">
        {/* <Header/> */}
      </div>
      <div className="grid-item">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
