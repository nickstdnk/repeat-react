import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers, toggleFollowing } from '../../redux/reducers/usersReducer'
import Preloader from '../common/Preloader/Preloader'
import Users from './Users'
import {
  toggleFollowingProgress,
} from '../../redux/actions/users'

const UsersContainer = (props) => {

  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize)
  }, [])

  const onPageChanged = (pageNumber) => {
    props.getUsers(pageNumber, props.pageSize)
  }

  const toggleFollowing = (userId, action) => {
    props.toggleFollowing(userId, action)
  }

  return (
    <>
      {props.isFetching ? <Preloader/> : null}
      <Users
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        users={props.users}
        toggleFollowing={toggleFollowing}
        followingInProgress={props.followingInProgress}
      />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
    followingInProgress: state.userPage.followingInProgress,
  }
}

export default connect(mapStateToProps,
  {
    getUsers,
    toggleFollowing,
    toggleFollowingProgress,
  })(UsersContainer)

