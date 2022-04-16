import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Users from './Users'
import { getUsers, setCurrentPage, setUsersTotalCount, toggleFollow } from '../../redux/reducers/usersReducer'

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.getUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.pageSize}`)
      .then(response => {
        this.props.getUsers(response.data.items)
      })
  }


  render() {
    return (
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             toggleFollow={this.toggleFollow}

      />
    )

  }
}

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
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCount(totalCount))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

