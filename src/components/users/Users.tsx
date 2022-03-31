import React from "react";
import defaultAvatar from '../../assets/defaultAvatar.png'
import {UsersStateType} from "../../redux/usersReducer";
import { NavLink } from "react-router-dom";
import {Pagination} from "../common/Pagination/Pagination";
import {Preloader} from "../common/Preloader";

type propsType = {
  usersPage: UsersStateType
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  onPageChanged: (newPage: number) => void
}

export function Users(props: propsType) {

  const follow = (id: number) => {
    props.follow(id)
  }
  const unfollow = (id: number) => {
    props.unfollow(id)
  }

  return (
    <div>
      <Pagination totalCount={props.usersPage.totalUsersCount}
                  pageSize={props.usersPage.pageSize}
                  currentPage={props.usersPage.currentPage}
                  onChangedPage={props.onPageChanged}
      />
      {props.usersPage.isFetching && <Preloader/>}
      {
        props.usersPage.users.map(m => {
          return (
            <div key={m.id}>
              <span>
                <NavLink to={'/profile/' + m.id}>
                  <img src={m.photos.small ? m.photos.small : defaultAvatar} alt="avatar"
                       style={{width: "50px", height: "50px", borderRadius: "50%"}}/>
                </NavLink>
                <div>
                  {m.followed
                    ? <button onClick={() => unfollow(m.id)} disabled={props.usersPage.followingInProgress.some(id => id === m.id)}>Unfollow</button>
                    : <button onClick={() => follow(m.id)} disabled={props.usersPage.followingInProgress.some(id => id === m.id)}>Follow</button>}
                </div>
              </span>
              <span>
                <div>{m.name}</div>
                <div>{m.status}</div>
              </span>
              <span>
                <div>{"city"}</div>
                <div>{"country"}</div>
              </span>
            </div>
          )
        })
      }
    </div>
  )
}