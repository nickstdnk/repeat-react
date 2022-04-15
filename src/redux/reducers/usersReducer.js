const TOGGLE_FOLLOWED = 'TOGGLE_FOLLOWED'
const GET_USERS = 'GET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 21,
  currentPage: 1
}


export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FOLLOWED: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: !u.followed}
          }
          return u
        })
      }
    }
    case GET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    }
    default:
      return state
  }
}

export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOWED, userId})
export const getUsers = (users) => ({type: GET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount})