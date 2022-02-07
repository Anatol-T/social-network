import {Dispatch} from "redux";
import {authAPI} from "../api/API";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

export type AuthStateType = {
  userID: number | null,
  email: string | null,
  login: string | null,
  isFetching: boolean,
  isAuth: boolean
}
let initialState: AuthStateType = {
  userID: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false
}

export const authReducer = (state:AuthStateType = initialState, action:AuthACType):AuthStateType => {
  switch (action.type) {
    case "SET-USER-DATA":
      return {...state, ...action.payload, isAuth: true, isFetching: false}
    case "GET-USER-DATA":
      return {...state, isFetching: true}
    case "SET-FAIL-AUTH":
      return {...state, isFetching: false, isAuth: false}
    default:
      return state
  }
}

type AuthACType = SetUserDataType | GetUserDataType | SetFailAuthType
type SetUserDataType = ReturnType<typeof setUserDataAC>
type GetUserDataType = ReturnType<typeof getUserDataAC>
type SetFailAuthType = ReturnType<typeof setFailAuth>

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

export const getUserDataTC = () => (dispatch: Dispatch) => {
  dispatch(getUserDataAC())
  authAPI.getMe()
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
export const loginTC = (email: string, password: string, rememberMe:boolean) => (dispatch:ThunkDispatch<any, any, any>) => {
  dispatch(getUserDataAC())
  authAPI.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getUserDataTC())
      } else {
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