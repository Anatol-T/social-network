import React from "react";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import defaultAvatar from '../../assets/defaultAvatar.png'

export function Users(props: UsersPropsType) {
  if (props.usersPage.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      return response.data.items
    }).then(users => {
      console.log(users)
      props.setUsers(users)
    })
  }
  return (
    <div>
      {
        props.usersPage.users.map(m => {
          return (
            <div key={m.id}>
              <span>
                <div>
                  <img src={m.photos.small ? m.photos.small: defaultAvatar} alt="avatar"/>
                </div>
                <div>
                  {m.followed ? <button onClick={()=> props.unfollow(m.id)}>Unfollow</button>
                  : <button onClick={()=> props.follow(m.id)}>Follow</button>}
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