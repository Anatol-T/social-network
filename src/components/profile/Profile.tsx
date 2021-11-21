import React from "react";
//import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postType} from "../../index";


type propsType = {
  posts: Array<postType>
}
export default function Profile ({posts}:propsType) {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={posts}/>
    </div>
  )
}