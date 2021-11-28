import React from "react";
//import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";


type propsType = {
  state: profilePageType
  addPost: (message:string)=> void
}
export default function Profile ({state, addPost}: propsType) {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={state.posts} addPost={addPost}/>
    </div>
  )
}