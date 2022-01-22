import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
  followTC, getUsersTC,
  unfollowTC,
  UsersStateType,
} from "../../redux/usersReducer";
import React from "react";
import {Preloader} from "../common/Preloader";

class UsersAPI extends React.Component<UsersPropsType> {

  componentDidMount() {
    this.props.getUsersTC(this.props.usersPage.currentPage,this.props.usersPage.pageSize)
    // this.props.toggleIsFetching(true)
    //
    // API.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    //   .then(data => {
    //     this.props.toggleIsFetching(false)
    //     this.props.setUsers(data.items)
    //     this.props.setTotalCount(+data.totalCount)
    //   })
  }

  onPageChanged = (newPage: number) => {
    this.props.getUsersTC(newPage,this.props.usersPage.pageSize)
    // this.props.setUsers([])
    // this.props.toggleIsFetching(true)
    // this.props.setCurrentPage(newPage)
    //
    // API.getUsers(newPage, this.props.usersPage.pageSize)
    //   .then(data => {
    //     this.props.toggleIsFetching(false)
    //     this.props.setUsers(data.items)
    //   })
  }

  render() {
    return (
      <>
        {this.props.usersPage.isFetching && <Preloader/>}
        <Users usersPage={this.props.usersPage}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               onPageChanged={this.onPageChanged}
        /></>
    )
  }
}


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
  getUsersTC: (currentPage:number, pageSize:number) => void
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//   return (
//     {
//       follow: (userID) => {
//         dispatch(followAC(userID))
//       },
//       unfollow: (userID) => {
//         dispatch(unfollowAC(userID))
//       },
//       setUsers: (users) => {
//         dispatch(setUsersAC(users))
//       },
//       setTotalCount: (totalCount:number)=> {
//         dispatch(setTotalCountAC(totalCount))
//       },
//       setCurrentPage: (newPage: number)=> {
//         dispatch(setCurrentPageAC(newPage))
//       },
//       toggleIsFetching: (isFetching: boolean)=> {
//         dispatch(toggleIsFetchingAC(isFetching))
//       },
//     }
//   )
// }
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

//export type UsersPropsType = ConnectedProps<typeof UsersContainer>
export const UsersContainer = connect(mapStateToProps, {
  follow: followTC,
  unfollow: unfollowTC,
  getUsersTC,
})(UsersAPI)