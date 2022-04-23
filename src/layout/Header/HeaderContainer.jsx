import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAuthUserData } from '../../redux/reducers/authReducer'
import Header from './Header'

const HeaderContainer = (props) => {
  useEffect(() => {
    props.getAuthUserData()
  }, [])
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
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)
