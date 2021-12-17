import React from 'react';
import {
  ActionType,
  addPostActionCreator,
  profilePageType,
  updateNewPostActionCreator
} from "../../../redux/store";
import {Store} from "redux";
import MyPosts from "./MyPosts";

type propsType = {
  store: Store
}
const MyPostsContainer = ({store}: propsType) => {
  const state: profilePageType = store.getState().profilePage

  const addPost = () => {
    store.dispatch(addPostActionCreator());
    store.dispatch(updateNewPostActionCreator(''))
  }
  const onPostChange = (text: string) => {
    let action: ActionType = updateNewPostActionCreator(text);
    store.dispatch(action)
  }

  return (
    <MyPosts posts={state.posts}
             newPostText={state.newPostText}
             addPost={addPost}
             updateNewPostText={onPostChange}
    />
  )

}

export default MyPostsContainer;