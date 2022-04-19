import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import axios from 'axios'
import { setAuthUserData } from '../../redux/reducers/authReducer'

const HeaderContainer = (props) => {
  useEffect(() => {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data
          props.setAuthUserData(id, email, login)
        }
      })
  })
  return (
    <Header {...props}/>
  )
}

let mapStateToProps = (state) => {
  return {
    login: state.authPage.login,
    isAuth: state.authPage.isAuth,
  }
}
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
