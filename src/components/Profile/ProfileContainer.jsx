import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import Profile from './Profile'

import { getProfile, getStatus, updateStatus } from '../../redux/reducers/profileReducer'

const ProfileContainer = (props) => {
  let {userId} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    userId = props.authUserId
    if (!userId) {
      return () => {
        navigate('/auth')
      }
    }
    props.getProfile(userId)
    props.getStatus(userId)
  }, [])

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