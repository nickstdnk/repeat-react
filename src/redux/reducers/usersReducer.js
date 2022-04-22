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
    case constants.GET_USERS: {
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
