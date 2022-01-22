import React from "react";
import defaultAvatar from '../../assets/defaultAvatar.png'
import {range} from "../../helpers/utils";
import stl from "./users.module.css"
import {UsersStateType} from "../../redux/usersReducer";
import { NavLink } from "react-router-dom";

type propsType = {
  usersPage: UsersStateType
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  onPageChanged: (newPage: number) => void
  //toggleFollowing: (id: number)=> void
}

export function Users(props: propsType) {
  const pageCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)
  const startPage = props.usersPage.currentPage - 3 < 1 ? 1 : props.usersPage.currentPage - 3;
  const endPage = (props.usersPage.currentPage + 20 - startPage) > pageCount ? pageCount : startPage + 19;

  const pages = range(startPage, endPage)

  const follow = (id: number) => {
    props.follow(id)
  }
  const unfollow = (id: number) => {
    props.unfollow(id)
  }

  return (
    <div>
      <div className={stl.pagination}>
        {pages.map(m => {
          return <span
            key={m}
            className={m === props.usersPage.currentPage
              ? stl.selectedPage + " " + stl.pageItem : stl.pageItem}
            onClick={() => {
              props.onPageChanged(m)
            }}>
              {m}
            </span>
        })}
      </div>
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