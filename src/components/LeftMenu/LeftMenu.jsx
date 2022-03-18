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
];
const LeftMenu = () => {
  return (
    <>
      <div className={styles.leftMenu}>
        <nav>
          <ul>
            {menu.map((obj) => (
              <li key={obj.path}>
                <NavLink to={obj.path} className={setActive}>
                  {obj.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default LeftMenu;
