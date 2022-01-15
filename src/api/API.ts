import axios from "axios";

const instanceAxios = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "ef43bd75-8438-40b6-8849-600e54b7eb04"
  }
})

export const API = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  }
}
export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
  return instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
}