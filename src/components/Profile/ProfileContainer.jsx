import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { getProfileUserData } from '../../redux/reducers/profileReducer'

import Profile from './Profile'

const ProfileContainer = (props) => {
  let {userId} = useParams()
  if (!userId) userId = 2

  useEffect(() => {
    props.getProfileUserData(userId)
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

export default connect(mapStateToProps, {getProfileUserData})(ProfileContainer)