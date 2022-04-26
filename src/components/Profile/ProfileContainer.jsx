import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { getProfile, getStatus, updateStatus } from '../../redux/reducers/profileReducer'

import Profile from './Profile'

const ProfileContainer = (props) => {
  let {userId} = useParams()
  if (!userId) userId = 23514

  useEffect(() => {
    props.getProfile(userId)
    props.getStatus(userId)
  }, [userId])

  return (
    <Profile {...props} />
  )
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  }
}

export default connect(mapStateToProps, {getProfile, getStatus, updateStatus})(ProfileContainer)