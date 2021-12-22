import {ActionType, postType, profilePageType} from "./store";

let initialState:profilePageType = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 11},
    {id: 4, message: 'Dada', likesCount: 11}
  ],
  newPostText: ""
}
const profileReducer = (state:profilePageType=initialState, action: ActionType):profilePageType => {
  switch (action.type) {
    case "ADD-POST":
      let newPost: postType = {
        id: Math.random(),
        message: state.newPostText,
        likesCount: 0
      }
      //state.posts.push(newPost)
      return {...state, posts: [...state.posts, newPost]};
    case "UPDATE-NEW-POST-TEXT":
      //state.newPostText = action.newText
      return {...state, newPostText: action.newText};
    default:
      return state;
  }

}

export default profileReducer;