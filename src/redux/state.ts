//import {rerenderEntireTree} from "../index";
let rerenderEntireTree = (state:stateType) => {
  console.log(state)
}

export type dialogType = {
  id: number,
  name: string
}
export type massageType = {
  id: number
  message: string
}
export type postType = {
  id: number,
  message: string,
  likesCount: number
}
export type profilePageType = {
  posts: Array<postType>
  newPostText: string
}
export type messagePageType ={
  dialogs: Array<dialogType>
  messages: Array<massageType>
}
export type stateType = {
  profilePage: profilePageType
  messagesPage: messagePageType
}
let state:stateType ={
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 11},
      {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: ""
  },
  messagesPage: {
    dialogs: [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Andrew'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Sasha'},
      {id: 5, name: 'Viktor'},
      {id: 6, name: 'Valera'}
    ],
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your it-kamasutra?'},
      {id: 3, message: 'Yo'},
      {id: 4, message: 'Yo'},
      {id: 5, message: 'Yo'}
    ]
  }
}

export const addPost = ()=> {
  let newPost:postType = {
    id: Math.random(),
    message: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
}
export const updateNewPostText = (text: string) => {
  state.profilePage.newPostText = text
  rerenderEntireTree(state)
}
export const subscribe = (observer: (state:stateType) =>void) => {
  rerenderEntireTree = observer;
}
export default state;