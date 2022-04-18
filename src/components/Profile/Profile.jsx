import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

import styles from './Profile.module.scss'

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile
