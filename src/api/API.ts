import axios from "axios";

const instanceAxios = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "ef43bd75-8438-40b6-8849-600e54b7eb04"
  }
})

export const userAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  follow(userID: number) {
    return instanceAxios.post(`follow/${userID}`)
  },
  unfollow(userID: number) {
    return instanceAxios.delete(`follow/${userID}`)
  },
}

export const profileAPI = {
  getProfile(userID: number) {
    return instanceAxios.get(`profile/${userID}`)
  },
  getStatus(userID: number) {
    return instanceAxios.get(`profile/status/${userID}`)
  },
  updateStatus (status: string) {
    return instanceAxios.put(`profile/status`, {status: status})
  },
}

export const authAPI = {
  getMe() {
    return instanceAxios.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe:boolean = false) {
    return instanceAxios.post('auth/login', {email, password, rememberMe})
  },
  logout() {
    return instanceAxios.delete('auth/login')
  },
}