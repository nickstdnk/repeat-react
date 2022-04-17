import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Users from './Users'
import {
  getUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFollow,
  toggleIsFetching
} from '../../redux/reducers/usersReducer'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.getUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
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
             isFetching={this.props.isFetching}
      />
    )

  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
  }
}

export default connect(mapStateToProps,
  {
    toggleFollow,
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
  })(UsersContainer)

