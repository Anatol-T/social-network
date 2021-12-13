import {ActionType, postType, StateType} from "./state";

const profileReducer = (state:StateType, action: ActionType):StateType => {
  switch (action.type) {
    case "ADD-POST":
      let newPost: postType = {
        id: Math.random(),
        message: state.profilePage.newPostText,
        likesCount: 0
      }
      state.profilePage.posts.push(newPost)
      return state;
    case "UPDATE-NEW-POST-TEXT":
      state.profilePage.newPostText = action.newText
      return state;
    default:
      return state;
  }

//   if (action.type === 'ADD-POST') {
//     let newPost: postType = {
//       id: Math.random(),
//       message: state.profilePage.newPostText,
//       likesCount: 0
//     }
//     state.profilePage.posts.push(newPost)
//   } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
//     state.profilePage.newPostText = action.newText
//   }
//   return state
}

export default profileReducer;