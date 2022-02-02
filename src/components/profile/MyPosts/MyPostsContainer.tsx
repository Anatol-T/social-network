//import React from 'react';

import {Dispatch} from "redux";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {addPostAC, profilePageType} from "../../../redux/profileReducer";


type MapStatePropsType = {
  profilePage: profilePageType
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return (
    {
      profilePage: state.profilePage
    }
  )
}

type MapDispatchPropsType = {
  addPost: (newPost:string)=> void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType=> {
  return (
    {
      addPost: (newPost:string) => {
        dispatch(addPostAC(newPost));
      }
    })
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const MyPostsContainer =connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;