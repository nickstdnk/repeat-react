import { connect } from 'react-redux'
import { getUsers, setCurrentPage, toggleFollow } from '../../redux/reducers/usersReducer'
import Users from './Users'


const mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => {
      dispatch(toggleFollow(userId))
    },
    getUsers: (users) => {
      dispatch(getUsers(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPage(currentPage))
    }
  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer