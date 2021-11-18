import React from "react";
//import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// type RatingPropsType = {
//   value: 0 | 1 | 2 | 3 | 4 | 5
// }

export default function Profile () {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts />
    </div>
  )
}