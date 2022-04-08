import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import LeftMenu from './LeftMenu/LeftMenu'

const Layout = (props) => {
  return (
    <div className="app-wrapper">
      <Header/>
      <LeftMenu
        store={props.store}
      />

      <div className="app-wrapper-content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
