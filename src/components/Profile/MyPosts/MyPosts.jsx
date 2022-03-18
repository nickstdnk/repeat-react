import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div className={styles.myPosts}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post message="Hi, how are you?" countLikes={15} />
        <Post message={`It's my first post`} countLikes={20} />
      </div>
    </div>
  );
};

export default MyPosts;
