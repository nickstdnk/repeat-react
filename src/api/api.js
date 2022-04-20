import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
  headers: {'API-KEY': `${process.env.REACT_APP_API_KEY}`},
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
}

export const headerAPI = {
  getAuthUserData() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  },
}

export const profileAPI = {
  getProfileUserData(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data
      })
  },
}
