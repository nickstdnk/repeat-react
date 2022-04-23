import { usersAPI } from '../../api/api'
import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleFollow,
  toggleFollowingProgress,
  toggleIsFetching,
} from '../actions/users'
import * as constants from '../constants/users'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}


export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case constants.TOGGLE_FOLLOWED: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: !u.followed}
          }
          return u
        }),
      }
    }
    case constants.SET_USERS: {
      return {
        ...state,
        users: action.users,
      }
    }
    case constants.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      }
    }
    case constants.SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalCount,
      }
    }
    case constants.TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      }
    }
    case constants.TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId),
      }
    }
    default:
      return state
  }
}

export const getUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(page))
    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(page, pageSize)
      .then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
      })
  }
}

export const toggleFollowing = (userId, actionFollow) => {
  let action = actionFollow ? usersAPI.follow(userId) : usersAPI.unfollow(userId)
  return dispatch => {
    dispatch(toggleFollowingProgress(true, userId))
    action.then(data => {
      if (data.resultCode === 0) {
        dispatch(toggleFollow(userId))
        dispatch(toggleFollowingProgress(false, userId))
      } else {
        throw Error('Ошибка подписки, что то пошло не так...')
      }
    })
  }
}
