import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

import styles from './Profile.module.scss'

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}
               newPostText={props.state.newPostText}
               dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile
