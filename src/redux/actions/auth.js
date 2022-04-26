import * as constants from '../constants/auth'

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: constants.SET_AUTH_USER_DATA,
  payload: {id, email, login, isAuth},
})