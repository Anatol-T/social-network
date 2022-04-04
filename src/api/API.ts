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
  savePhoto(photo:File){
    const formData = new FormData()
    formData.append("image", photo)
    return instanceAxios.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile (profile: Object) {
    return instanceAxios.put(`profile`, profile)
  },
}

export const authAPI = {
  getMe() {
    return instanceAxios.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe:boolean = false, captcha?: string) {
    return instanceAxios.post('auth/login', {email, password, rememberMe, captcha})
  },
  logout() {
    return instanceAxios.delete('auth/login')
  },
}
export const securityAPI = {
  getCaptcha() {
    return instanceAxios.get(`/security/get-captcha-url`)
  },
}