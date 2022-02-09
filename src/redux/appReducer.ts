import {getUserDataTC} from "./authReducer";

export type AppStateType = {
  initialized: boolean,
}
let initialState: AppStateType = {
  initialized: false
}

export const appReducer = (state:AppStateType = initialState, action:AppACType):AppStateType => {
  switch (action.type) {
    case "INITIALIZED-SUCCESS":
      return {...state, initialized: true}
    default:
      return state
  }
}

type AppACType = initializedSuccessType
type initializedSuccessType = ReturnType<typeof initializedSuccessAC>

const initializedSuccessAC = () => {
  return {
    type: "INITIALIZED-SUCCESS",
  } as const
}

export const initializeAppTC = () => (dispatch: Function) => {
  const promise = dispatch(getUserDataTC());
  Promise.all([promise])
    .then(()=>{
      dispatch(initializedSuccessAC())
    })

}