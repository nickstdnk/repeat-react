import React from 'react'
import styles from './ProfileInfo.module.scss'
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={styles.profileInfo}>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto-compress&cs-tinysrgb&h=350"
             alt=""/>
      </div>
      <div className={styles.descriptionBlock}>
        <img src={props.profile.photos?.large} alt="user"/>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo
