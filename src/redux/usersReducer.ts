

export type UserType = {
  id: number
  followed: boolean
  name: string
  uniqueUrlName: string | null
  status: string | null
  photos: {
    small: string | null
    large: string | null
  }
}
export type UsersStateType = typeof initialState
let initialState ={
  users: [] as Array<UserType>
}

 const usersReducer = (state:UsersStateType = initialState, action:ActionsType):UsersStateType => {
   switch (action.type) {
     case "FOLLOW":
       return {...state, users: state.users.map(m=>
           m.id === action.userID ? {...m, followed: true} : {...m})}
     case "UNFOLLOW":
       return {...state, users: state.users.map(m=>
           m.id === action.userID ? {...m, followed: false} : {...m})}
     case "SET-USERS":
       return {users: action.users}
     default:
       return state
   }
}

type ActionsType = FollowACType | UnfollowACType | SetUsersACType
type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (userID: number) => {
  return {
    type: "FOLLOW",
    userID
  } as const
}
export const unfollowAC = (userID: number) => {
  return {
    type: "UNFOLLOW",
    userID
  } as const
}
export const setUsersAC = (users: Array<UserType>) => {
  return {
    type: "SET-USERS",
    users
  } as const
}

export default usersReducer;