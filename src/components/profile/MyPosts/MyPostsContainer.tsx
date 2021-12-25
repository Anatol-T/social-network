//import React from 'react';

import {Dispatch} from "redux";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {addPostAC, profilePageType, updateNewPostAC} from "../../../redux/profileReducer";

// type propsType = {
//   store: Store
// }
// const MyPostsContainer = ({store}: propsType) => {
//   const state: profilePageType = store.getState().profilePage
//
//   const addPost = () => {
//     store.dispatch(addPostActionCreator());
//     store.dispatch(updateNewPostActionCreator(''))
//   }
//   const onPostChange = (text: string) => {
//     let action: ActionType = updateNewPostActionCreator(text);
//     store.dispatch(action)
//   }
//
//   return (
//     <MyPosts profilePage={state}
//              addPost={addPost}
//              updateNewPostText={onPostChange}
//     />
//   )
// }

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
  updateNewPostText: (text:string)=> void
  addPost: ()=> void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType=> {
  return (
    {
      updateNewPostText: (text:string) => {
        let action = updateNewPostAC(text);
        dispatch(action)
      },
      addPost: () => {
        dispatch(addPostAC());
      }
    })
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const MyPostsContainer =connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;