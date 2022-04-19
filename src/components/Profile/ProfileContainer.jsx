import { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import Profile from './Profile'
import { setUserProfile } from '../../redux/reducers/profileReducer'


const ProfileContainer = (props) => {
  let {userId} = useParams()
  if (!userId) userId = 2

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        props.setUserProfile(response.data)
      })

  }, [userId])

  return (
    <Profile {...props} />
  )
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)