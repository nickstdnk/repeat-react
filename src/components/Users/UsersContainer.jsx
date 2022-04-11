import { connect } from 'react-redux'
import { toggleFollow } from '../../redux/reducers/usersReducer'
import Users from './Users'


const mapStateToProps = (state) => {
  return {
    users: state.userPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => {
      dispatch(toggleFollow(userId))
    }
  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer