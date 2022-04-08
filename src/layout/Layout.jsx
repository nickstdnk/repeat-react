import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import LeftMenu from './LeftMenu/LeftMenu'

const Layout = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <LeftMenu/>

      <div className="app-wrapper-content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
