import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

import styles from './Profile.module.scss'

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}

export default Profile
