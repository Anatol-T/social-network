

export type UserType = {
  id: number
  followed: boolean
  fullName: string
  status: string
  location: {
    city: string
    country: string
  }
}
export type UsersStateType = typeof initialState
let initialState ={
  users: [
    {id: 1, followed: false, fullName: 'Dmitriy', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
    {id: 2, followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
    {id: 3, followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Minsk', country: 'Belarus'}},

  ] as Array<UserType>
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
       return {...state}
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