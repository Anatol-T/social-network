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
  follow (userID:number) {
    return instanceAxios.post(`follow/${userID}`)
  },
  unfollow (userID:number) {
    return instanceAxios.delete(`follow/${userID}`)
  },
  getProfile (userID:number) {
    return instanceAxios.get(`profile/${userID}`)
  }
}

export const authAPI = {
  getMe () {
    return instanceAxios.get(`auth/me`)
  },
}