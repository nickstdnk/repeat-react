import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './LeftMenu.module.scss'

const setActive = ({isActive}) => (isActive ? 'active-link' : '')

const LeftMenu = (props) => {
  let state = props.store.getState().friendsPage
  let sidebar = props.store.getState().sidebar
  debugger;
  return (
    <>
      <div className={styles.leftMenu}>
        <nav>
          <ul>
            {sidebar.menu.map((obj) => (
              <li key={obj.path} className={obj?.styles}>
                <NavLink to={obj.path} className={setActive}>
                  {obj.text}
                </NavLink>
              </li>
            ))}

            {state.friends.map((obj) => (
              <div style={{paddingTop: '15px'}} key={obj.id}>
                <NavLink to={`/friends/${obj.id}`}>{`${obj.name} ${obj.surname}`}</NavLink>
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default LeftMenu
