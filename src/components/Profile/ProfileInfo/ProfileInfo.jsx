import React from 'react';
import styles from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
    <div className={styles.profileInfo}>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto-compress&cs-tinysrgb&h=350" />
      </div>
      <div className={styles.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
