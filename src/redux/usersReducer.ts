

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
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
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
       return {...state, users: action.users}
     case "SET-TOTAL-COUNT":
       return {...state, totalUsersCount: action.totalCount}
     case "SET-CURRENT-PAGE":
       return {...state, currentPage: action.newPage}
     default:
       return state
   }
}

type ActionsType = FollowACType | UnfollowACType |
  SetUsersACType | SetCurrentPageACType | SetTotalCountACType
type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type SetTotalCountACType = ReturnType<typeof setTotalCountAC>

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
export const setCurrentPageAC = (newPage: number)=> {
  return {
    type: "SET-CURRENT-PAGE",
    newPage
  } as const
}
export const setTotalCountAC = (totalCount:number)=> {
  return {
    type: "SET-TOTAL-COUNT",
    totalCount
  } as const
}

export default usersReducer;