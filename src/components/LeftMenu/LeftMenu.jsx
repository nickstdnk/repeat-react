import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LeftMenu.module.scss';
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
      <div className={styles.root}>
        <nav>
          <ul>
            {menu.map((obj) => (
              <li key={obj.path}>
                <Link to={obj.path}>{obj.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default LeftMenu;
