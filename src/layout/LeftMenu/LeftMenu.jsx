import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LeftMenu.module.scss';

const setActive = ({ isActive }) => (isActive ? 'active-link' : '');

const menu = [
  { text: 'Profile', path: '/' },
  { text: 'Messages', path: '/dialogs' },
  { text: 'News', path: '/news' },
  { text: 'Music', path: '/music' },
  { text: 'Settings', path: '/settings' },
  { text: 'Friends', path: '/friends', styles: styles.friends },
];
const LeftMenu = (props) => {
  return (
    <>
      <div className={styles.leftMenu}>
        <nav>
          <ul>
            {menu.map((obj) => (
              <li key={obj.path} className={obj?.styles}>
                <NavLink to={obj.path} className={setActive}>
                  {obj.text}
                </NavLink>
              </li>
            ))}

            {props.friends.map((obj) => (
              <div style={{ paddingTop: '15px' }} key={obj.id}>
                <NavLink to={`/friends/${obj.id}`}>{`${obj.name} ${obj.surname}`}</NavLink>
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default LeftMenu;
