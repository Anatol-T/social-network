
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
    default:
      return state
  }
}

type AuthACType = SetUserDataType | GetUserDataType
type SetUserDataType = ReturnType<typeof setUserDataAC>
type GetUserDataType = ReturnType<typeof getUserDataAC>

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