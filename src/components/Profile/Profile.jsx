import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.scss';
const Profile = () => {
  return (
    <div className={styles.root}>
      <div>ava + description</div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
