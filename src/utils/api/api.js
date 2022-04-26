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

export const authAPI = {
  getAuthUserData() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  },

  login(email, password, rememberMe) {
    return instance.post(`auth/login`, {email, password, rememberMe})
      .then(response => {
        return response.data
      })
  },
  logout() {
    return instance.delete(`auth/login`)
      .then(response => {
        return response.data
      })
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data
      })
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then(response => {
        return response.data
      })
  },

  updateStatus(status) {
    return instance.put(`profile/status`, {status})
      .then(response => {
        return response.data
      })
  },
}
