import * as constants from '../constants/auth'

export const setAuthUserData = (id, email, login) => ({type: constants.SET_AUTH_USER_DATA, data: {id, email, login}})