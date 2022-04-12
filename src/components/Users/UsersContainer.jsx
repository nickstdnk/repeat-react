import { connect } from 'react-redux'
import { getUsers, toggleFollow } from '../../redux/reducers/usersReducer'
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
    },
    getUsers: (users) => {
      dispatch(getUsers(users))
    }
  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer