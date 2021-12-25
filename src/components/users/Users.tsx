import React from "react";
import {UsersPropsType} from "./UsersContainer";

export function Users(props: UsersPropsType) {
  return (
    <div>
      {
        props.usersPage.users.map(m => {
          return (
            <div key={m.id}>
              <span>
                <div>
                  <span>Ꙫ</span>
                </div>
                <div>
                  {m.followed ? <button onClick={()=> props.unfollow(m.id)}>Unfollow</button>
                  : <button onClick={()=> props.follow(m.id)}>Follow</button>}
                </div>
              </span>
              <span>
                <div>{m.fullName}</div>
                <div>{m.status}</div>
              </span>
              <span>
                <div>{m.location.city}</div>
                <div>{m.location.country}</div>
              </span>
            </div>
          )
        })
      }
    </div>
  )
}