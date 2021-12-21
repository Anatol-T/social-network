//import React from 'react';
import {
  ActionType,
  addPostActionCreator,
  profilePageType,  StateType,
  updateNewPostActionCreator
} from "../../../redux/store";
import {Dispatch} from "redux";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

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

const mapStateToProps = (state: StateType): { profilePage: profilePageType } => {
  return (
    {
      profilePage: state.profilePage
    }
  )
}
const mapDispatchToProps = (dispatch: Dispatch):
  {updateNewPostText: (text:string)=> void
    addPost: ()=> void } => {
  return (
    {
      updateNewPostText: (text:string) => {
        let action: ActionType = updateNewPostActionCreator(text);
        dispatch(action)
      },
      addPost: () => {
        dispatch(addPostActionCreator());
        dispatch(updateNewPostActionCreator(''))
      }
    })
}
const MyPostsContainer =connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;