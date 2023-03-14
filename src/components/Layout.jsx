import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Events from './Events'
import OrganizationList from './OrganizationList'
import Dashboard from '../pages/Dashboard'
const Layout = () => {

  const style = {
    'padding' : '0px 500px'
  }

  return (
    <div className='grid-container'>
      <div className="grid-item">
        <Header/>
      </div>
      <div className="grid-item">
        <div className="flex-container">
          <div className="flex-item">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
