import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersStateType, UserType} from "../../redux/usersReducer";
import {Dispatch} from "redux";


type MapStatePropsType = {
  usersPage: UsersStateType
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return (
    {
      usersPage: state.usersPage
    }
  )
}

type MapDispatchPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: Array<UserType>) => void
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
  return (
    {
      follow: (userID) => {
        dispatch(followAC(userID))
      },
      unfollow: (userID) => {
        dispatch(unfollowAC(userID))
      },
      setUsers: (users)=> {
        dispatch(setUsersAC(users))
      }
    }
  )
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)