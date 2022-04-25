import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.authPage.isAuth,
})

const WithAuthRedirect = (Component) => {
  let RedirectComponent = (props) => {
    let navigate = useNavigate()
    useEffect(() => {
      !props.isAuth && navigate('/auth')
    }, [])
    return <Component {...props} />
  }
  return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
export default WithAuthRedirect
