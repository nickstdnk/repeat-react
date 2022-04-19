import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarContainer from './Sidebar/SidebarContainer'
import HeaderContainer from './Header/HeaderContainer'

const Layout = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <SidebarContainer/>

      <div className="app-wrapper-content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
