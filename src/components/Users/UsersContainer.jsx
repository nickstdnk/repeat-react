import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {
  getUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFollow,
  toggleIsFetching
} from '../../redux/reducers/usersReducer'
import { usersAPI } from '../../api/api'

const UsersContainer = (props) => {

  useEffect(() => {
    props.toggleIsFetching(true)
    usersAPI.getUsers(props.currentPage, props.pageSize)
      .then(data => {
        props.toggleIsFetching(false)
        props.getUsers(data.items)
        props.setTotalUsersCount(data.totalCount)
      })
  }, [])

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber)
    props.toggleIsFetching(true)
    usersAPI.getUsers(pageNumber, props.pageSize)
      .then(data => {
        props.toggleIsFetching(false)
        props.getUsers(data.items)
      })
  }

  const follow = (userId) => {
    usersAPI.follow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          props.toggleFollow(userId)
        } else {
          throw Error('Ошибка подписки, что то пошло не так...')
        }
      })
  }

  const unfollow = (userId) => {
    usersAPI.unfollow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          props.toggleFollow(userId)
        } else {
          throw Error('Ошибка отписки, что то пошло не так...')
        }
      })

  }

  return (
    <Users totalUsersCount={props.totalUsersCount}
           pageSize={props.pageSize}
           currentPage={props.currentPage}
           onPageChanged={onPageChanged}
           users={props.users}
           follow={follow}
           unfollow={unfollow}
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

