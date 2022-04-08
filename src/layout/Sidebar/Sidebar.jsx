import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.scss'

const setActive = ({isActive}) => (isActive ? 'active-link' : '')

const Sidebar = (props) => {

  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          {props.menu.map((obj) => (
            <li key={obj.path} className={obj?.styles}>
              <NavLink to={obj.path} className={setActive}>
                {obj.text}
              </NavLink>
            </li>
          ))}

          {props.friends.map((obj) => (
            <div style={{paddingTop: '15px'}} key={obj.id}>
              <NavLink to={`/friends/${obj.id}`}>{`${obj.name} ${obj.surname}`}</NavLink>
            </div>
          ))}
        </ul>
      </nav>
    </div>

  )
}

export default Sidebar

