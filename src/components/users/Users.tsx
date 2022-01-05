import React from "react";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import defaultAvatar from '../../assets/defaultAvatar.png'
import {range} from "../../helpers/utils";
import stl from "./users.module.css"

export class Users extends React.Component<UsersPropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(+response.data.totalCount)
      })
  }

  onPageChanged = (newPage:number)=> {
    this.props.setCurrentPage(newPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPage}&count=${this.props.usersPage.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    const pageCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)
    const pages = range(1, pageCount)
    console.log()
    return (
      <div>
        {
          this.props.usersPage.users.map(m => {
            return (
              <div key={m.id}>
              <span>
                <div>
                  <img src={m.photos.small ? m.photos.small : defaultAvatar} alt="avatar"
                       style={{width: "50px", height: "50px", borderRadius: "50%"}}/>
                </div>
                <div>
                  {m.followed ? <button onClick={() => this.props.unfollow(m.id)}>Unfollow</button>
                    : <button onClick={() => this.props.follow(m.id)}>Follow</button>}
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
        <div className={stl.pagination}>
          {pages.map(m => {
            return <span
              key={m}
              className={m === this.props.usersPage.currentPage
                ? stl.selectedPage + " " + stl.pageItem : stl.pageItem}
              onClick={()=>{this.onPageChanged(m)}}>
              {m}
            </span>
          })}
        </div>
      </div>
    )
  }
}

// export function Users(props: UsersPropsType) {
//   const getUsers = () => {
//     if (props.usersPage.users.length === 0) {
//       axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//         return response.data.items
//       }).then(users => {
//         console.log(users)
//         props.setUsers(users)
//       })
//     }
//   }
//
//   return (
//     <div>
//       <button onClick={getUsers}>Get users</button>
//       {
//         props.usersPage.users.map(m => {
//           return (
//             <div key={m.id}>
//               <span>
//                 <div >
//                   <img src={m.photos.small ? m.photos.small: defaultAvatar} alt="avatar"
//                        style={{width: "50px", height: "50px", borderRadius: "50%"}}/>
//                 </div>
//                 <div>
//                   {m.followed ? <button onClick={()=> props.unfollow(m.id)}>Unfollow</button>
//                     : <button onClick={()=> props.follow(m.id)}>Follow</button>}
//                 </div>
//               </span>
//               <span>
//                 <div>{m.name}</div>
//                 <div>{m.status}</div>
//               </span>
//               <span>
//                 <div>{"city"}</div>
//                 <div>{"country"}</div>
//               </span>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }