import React from 'react';
import styles from './Post.module.scss';

const Post = () => {
  return (
    <div className={styles.item}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
