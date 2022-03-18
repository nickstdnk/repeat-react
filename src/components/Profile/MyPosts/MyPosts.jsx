import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div className={styles.root}>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        <Post message="Hi, how are you?" countLikes={15} />
        <Post message={`It's my first post`} countLikes={20} />
      </div>
    </div>
  );
};

export default MyPosts;
