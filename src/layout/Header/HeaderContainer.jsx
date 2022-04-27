import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/reducers/authReducer'
import Header from './Header'

const HeaderContainer = (props) => {
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
export default connect(mapStateToProps, {logout})(HeaderContainer)
