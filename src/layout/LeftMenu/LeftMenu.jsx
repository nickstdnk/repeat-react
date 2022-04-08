import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './LeftMenu.module.scss'
import StoreContext from '../../storeContext'

const setActive = ({isActive}) => (isActive ? 'active-link' : '')

const LeftMenu = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().friendsPage
          let sidebar = store.getState().sidebar
          return (
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
          )
        }
      }
    </StoreContext.Consumer>

  )
}

export default LeftMenu
