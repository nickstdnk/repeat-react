import * as constants from '../constants/users'

export const toggleFollow = (userId) => ({type: constants.TOGGLE_FOLLOWED, userId})
export const getUsers = (users) => ({type: constants.GET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: constants.SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: constants.SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: constants.TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: constants.TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
})