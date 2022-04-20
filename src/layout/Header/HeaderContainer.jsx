import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/reducers/authReducer'
import { headerAPI } from '../../api/api'
import Header from './Header'

const HeaderContainer = (props) => {
  useEffect(() => {
    headerAPI.getAuthUserData()
      .then(data => {
        if (data.resultCode === 0) {
          let {id, email, login} = data.data
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
