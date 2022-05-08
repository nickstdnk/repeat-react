import { useEffect } from 'react'
import { connect } from 'react-redux'

import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

import {
  toggleFollowingProgress,
} from '../../redux/actions/users'
import { getUsers, toggleFollowing } from '../../redux/reducers/users'

import * as selectors from '../../redux/selectors/users'

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
    users: selectors.getUsers(state),
    pageSize: selectors.getPageSize(state),
    totalUsersCount: selectors.getTotalUsersCount(state),
    currentPage: selectors.getCurrentPage(state),
    isFetching: selectors.getIsFetching(state),
    followingInProgress: selectors.getFollowingInProgress(state),
  }
}

export default connect(mapStateToProps,
  {
    getUsers,
    toggleFollowing,
    toggleFollowingProgress,
  })(UsersContainer)

