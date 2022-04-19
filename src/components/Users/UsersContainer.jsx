import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Users from './Users'
import {
  getUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFollow,
  toggleIsFetching
} from '../../redux/reducers/usersReducer'

const UsersContainer = (props) => {

  useEffect(() => {
    props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
      .then(response => {
        props.toggleIsFetching(false)
        props.getUsers(response.data.items)
        props.setTotalUsersCount(response.data.totalCount)
      })
  }, [])

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber)
    props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
      .then(response => {
        props.toggleIsFetching(false)
        props.getUsers(response.data.items)
      })
  }

  return (
    <Users totalUsersCount={props.totalUsersCount}
           pageSize={props.pageSize}
           currentPage={props.currentPage}
           onPageChanged={onPageChanged}
           users={props.users}
           toggleFollow={props.toggleFollow}
           isFetching={props.isFetching}
    />
  )
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

