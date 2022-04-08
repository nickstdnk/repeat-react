import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

import styles from './Profile.module.scss'

const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile
