import React from 'react';
import styles from './Content.module.scss';
const Content = () => {
  return (
    <div className={styles.root}>
      <div>ava + description</div>
      <div>
        My Posts
        <div>New Posts</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
