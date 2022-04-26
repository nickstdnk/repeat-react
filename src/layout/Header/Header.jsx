import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <>
      <div className={styles.header}>
        <header style={{display: 'flex', justifyContent: 'space-between'}}>
          <img src="https://freelogodesign.org/Content/img/logo-ex-7.png" alt=""/>
          <div>
            {props.isAuth
              ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
              : <Link to="auth">Login</Link>}
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
