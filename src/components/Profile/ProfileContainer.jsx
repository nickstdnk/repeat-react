import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { setUserProfile } from '../../redux/reducers/profileReducer'
import { profileAPI } from '../../api/api'

import Profile from './Profile'

const ProfileContainer = (props) => {
  let {userId} = useParams()
  if (!userId) userId = 2

  useEffect(() => {
    profileAPI.getProfileUserData(userId)
      .then(data => {
        props.setUserProfile(data)
      })
  }, [userId])

  return (
    <Profile {...props} />
  )
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)