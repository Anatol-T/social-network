import {userAPI} from "../api/API";
import {Dispatch} from "redux";

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
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>
}

 const usersReducer = (state:UsersStateType = initialState, action:ActionsType):UsersStateType => {
   switch (action.type) {
     case "FOLLOW":
       return {...state, users: state.users.map(m=>
           m.id === action.userID ? {...m, followed: true} : {...m}),
       followingInProgress: state.followingInProgress.filter(f=> f !== action.userID)}
     case "UNFOLLOW":
       return {...state, users: state.users.map(m=>
           m.id === action.userID ? {...m, followed: false} : {...m}),
         followingInProgress: state.followingInProgress.filter(f=> f !== action.userID)}
     case "SET-USERS":
       return {...state, users: action.users}
     case "SET-TOTAL-COUNT":
       return {...state, totalUsersCount: action.totalCount}
     case "SET-CURRENT-PAGE":
       return {...state, currentPage: action.newPage}
     case "TOGGLE-IS-FETCHING":
       return {...state, isFetching: action.isFetching}
     case "ADD-FOLLOWING":
       return {...state, followingInProgress: [...state.followingInProgress, action.id]}
     default:
       return state
   }
}
export default usersReducer;

type ActionsType = FollowACType | UnfollowACType | ToggleIsFetchingACType |
  SetUsersACType | SetCurrentPageACType | SetTotalCountACType | ToggleFollowingACType
type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type SetTotalCountACType = ReturnType<typeof setTotalCountAC>
type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
type ToggleFollowingACType = ReturnType<typeof toggleFollowingAC>

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
export const toggleIsFetchingAC = (isFetching: boolean)=> {
  return {
    type: "TOGGLE-IS-FETCHING",
    isFetching
  } as const
}
export const toggleFollowingAC = (id: number)=> {
  return {
    type: "ADD-FOLLOWING",
    id
  } as const
}


export const getUsersTC = (currentPage:number, pageSize:number) => {
  return (dispatch:Dispatch) => {
    dispatch(setUsersAC([]))
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))

    userAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalCountAC(+data.totalCount))
      })
  }
}

export const followTC = (userID:number)=> {
  return (dispatch:Dispatch) => {
    dispatch(toggleFollowingAC(userID))
    userAPI.follow(userID)
      // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
      //   {withCredentials: true,
      //     headers: {"API-KEY": "ef43bd75-8438-40b6-8849-600e54b7eb04"}
      //   })
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followAC(userID))
        }
      })
  }
}

export const unfollowTC = (userID:number)=> {
  return (dispatch:Dispatch) => {
    dispatch(toggleFollowingAC(userID))
    userAPI.unfollow(userID)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowAC(userID))
        }
      })
  }
}