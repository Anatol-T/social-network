import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";


// type propsType = {
//   store: Store
// }
export default function Profile (props: ProfilePropsType) {
  return (
    <div>
      <ProfileInfo {...props}/>
      <MyPostsContainer />
    </div>
  )
}