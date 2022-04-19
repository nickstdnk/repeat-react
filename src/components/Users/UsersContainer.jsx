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
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`, {withCredentials: true})
      .then(response => {
        props.toggleIsFetching(false)
        props.getUsers(response.data.items)
        props.setTotalUsersCount(response.data.totalCount)
      })
  }, [])

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber)
    props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`, {withCredentials: true})
      .then(response => {
        props.toggleIsFetching(false)
        props.getUsers(response.data.items)
      })
  }
  const follow = (userId) => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
      withCredentials: true,
      headers: {'API-KEY': '27c1fa5b-4b93-43f9-9a7e-0fd1a95e83db'}
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          props.toggleFollow(userId)
        } else {
          throw Error('Ошибка подписки, что то пошло не так...')
        }
      })
  }

  const unfollow = (userId) => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
      withCredentials: true,
      headers: {'API-KEY': '27c1fa5b-4b93-43f9-9a7e-0fd1a95e83db'}
    })
      .then(response => {
        if (response.data.resultCode === 0) {
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

