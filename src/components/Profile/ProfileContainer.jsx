import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { getProfile, getStatus, updateStatus } from '../../redux/reducers/profileReducer'

import Profile from './Profile'

const ProfileContainer = (props) => {
  let {userId} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    props.getProfile(userId)
    props.getStatus(userId)
  }, [userId])

  useEffect(() => {
    userId = props.authUserId
    if (!userId) {
      navigate('/auth')
    }
  }, [!userId])

  return (
    <Profile {...props} />
  )
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.authPage.id,
    isAuth: state.authPage.isAuth,
  }
}

export default connect(mapStateToProps, {getProfile, getStatus, updateStatus})(ProfileContainer)