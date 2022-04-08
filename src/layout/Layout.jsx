import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import SidebarContainer from './Sidebar/SidebarContainer'

const Layout = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <SidebarContainer/>

      <div className="app-wrapper-content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
