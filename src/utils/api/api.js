import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
  headers: {'API-KEY': `${process.env.REACT_APP_API_KEY}`},
})

export const usersAPI = {
  async getUsers(currentPage, pageSize) {
    const {data} = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
    return data
  },
  async follow(userId) {
    const {data} = await instance.post(`follow/${userId}`)
    return data
  },
  async unfollow(userId) {
    const {data} = await instance.delete(`follow/${userId}`)
    return data
  },
}

export const authAPI = {
  async getAuthUserData() {
    const {data} = await instance.get(`auth/me`)
    return data
  },

  async login(email, password, rememberMe, captcha) {
    const {data} = await instance.post(`auth/login`, {email, password, rememberMe, captcha})
    return data
  },

  async getCaptcha() {
    const {data} = await instance.get(`security/get-captcha-url`)
    return data
  },

  async logout() {
    const {data} = await instance.delete(`auth/login`)
    return data
  },
}

export const profileAPI = {
  async getProfile(userId) {
    const {data} = await instance.get(`profile/${userId}`)
    return data
  },
  async getStatus(userId) {
    const {data} = await instance.get(`profile/status/${userId}`)
    return data
  },

  async updateStatus(status) {
    const {data} = await instance.put(`profile/status`, {status})
    return data
  },
}
