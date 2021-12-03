import React from "react";
//import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";


type propsType = {
  state: profilePageType
  updateNewPostText: (text:string)=> void
  addPost: ()=> void
}
export default function Profile ({state, updateNewPostText,addPost}: propsType) {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={state.posts}
               newPostText={state.newPostText}
               updateNewPostText={updateNewPostText}
               addPost={addPost}/>
    </div>
  )
}