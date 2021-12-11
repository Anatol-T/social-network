import React from "react";
//import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, profilePageType} from "../../redux/state";


type propsType = {
  state: profilePageType
  dispatch: (action: ActionType) => void
}
export default function Profile ({state, dispatch}: propsType) {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={state.posts}
               newPostText={state.newPostText}
               dispatch={dispatch}/>
    </div>
  )
}