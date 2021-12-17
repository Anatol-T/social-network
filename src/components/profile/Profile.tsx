import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Store} from "redux";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type propsType = {
  store: Store
}
export default function Profile ({store}: propsType) {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer store={store}/>
    </div>
  )
}