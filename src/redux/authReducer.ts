import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/API";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

export type AuthStateType = {
  userID: number | null,
  email: string | null,
  login: string | null,
  isFetching: boolean,
  isAuth: boolean,
  captchaUrl: string
}
let initialState: AuthStateType = {
  userID: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: ""
}

export const authReducer = (state:AuthStateType = initialState, action:AuthACType):AuthStateType => {
  switch (action.type) {
    case "SET-USER-DATA":
      return {...state, ...action.payload, isAuth: true, isFetching: false}
    case "GET-USER-DATA":
      return {...state, isFetching: true}
    case "SET-FAIL-AUTH":
      return {...state, isFetching: false, isAuth: false}
    case "SET-CAPTCHA":
      return {...state, captchaUrl: action.captchaUrl}
    default:
      return state
  }
}

type AuthACType = SetUserDataType | GetUserDataType | SetFailAuthType | SetCaptchaACType
type SetUserDataType = ReturnType<typeof setUserDataAC>
type GetUserDataType = ReturnType<typeof getUserDataAC>
type SetFailAuthType = ReturnType<typeof setFailAuth>
type SetCaptchaACType = ReturnType<typeof setCaptchaAC>

export const setUserDataAC = (userID: number, email: string, login: string) => {
  return {
    type: "SET-USER-DATA",
    payload: {
      userID,
      email,
      login,
    }
  } as const
}

export const getUserDataAC = () => {
  return {
    type: "GET-USER-DATA",
  } as const
}
const setFailAuth = () => {
  return {
    type: "SET-FAIL-AUTH",
  } as const
}
const setCaptchaAC = (captchaUrl: string) => {
  return {
    type: "SET-CAPTCHA",
    captchaUrl
  } as const
}

export const getUserDataTC = () => (dispatch: Dispatch) => {
  dispatch(getUserDataAC())
  return authAPI.getMe()
    .then(response => {
      if (response.data.resultCode === 0) {
        console.log('fetch')
        const {id, email, login} = response.data.data
        dispatch(setUserDataAC(id, email, login))
      } else {
        dispatch(setFailAuth())
      }
    })
}
export const loginTC = (email: string, password: string, rememberMe:boolean, captcha?: string) => (dispatch:ThunkDispatch<any, any, any>) => {
  dispatch(getUserDataAC())
  authAPI.login(email, password, rememberMe, captcha)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getUserDataTC())
        dispatch(setCaptchaAC(""))
      } else {
        if (response.data.resultCode === 10) {
          dispatch(getCaptchaURLTC())
        }
        dispatch(setFailAuth())
        const message = response.data.messages.length ? response.data.messages[0] : "Some error"
        const action = stopSubmit("login", {_error: message})
        dispatch(action)
      }
    })
}

export const logoutTC = () => (dispatch: Dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setFailAuth())
      }
    })
}

export const getCaptchaURLTC = () => (dispatch:Dispatch) => {
  dispatch(getUserDataAC())
  securityAPI.getCaptcha()
    .then(response => {
    dispatch(setCaptchaAC(response.data.url))
    })
}