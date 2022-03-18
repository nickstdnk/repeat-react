import React from 'react';
import styles from './LeftMenu.module.scss';
const menu = [
  { text: 'Profile', path: '/' },
  { text: 'Messages', path: '/messages' },
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
                <a href={obj.path}>{obj.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default LeftMenu;
