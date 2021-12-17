//import {rerenderEntireTree} from "../index";


import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
export type dialogsPageType = {
  dialogs: Array<dialogType>
  messages: Array<massageType>
  newMessageBody: string
}
export type StateType = {
  profilePage: profilePageType
  dialogsPage: dialogsPageType
}
export type StoreType = {
  _state: StateType
  getState: () => StateType
  //addPost: () => void
  _callSubscriber: () => void
  //updateNewPostText: (text: string) => void
  subscribe: (observer: () => void)=> void
  dispatch: (action: ActionType) => void
}

// type AddPostActionType = {
//   type: "ADD-POST"
//   //postText: string
// }
type AddPostActionType = ReturnType<typeof addPostActionCreator>;
type ChangeNewTextActionType = {
  type: "UPDATE-NEW-POST-TEXT"
  newText: string
}
type ChangeNewMessageBodyActionType = {
  type: "UPDATE-NEW-MESSAGE-BODY",
  newBody: string
}
type SendMessageActionType = {
  type: "SEND-MESSAGE"
}
export type ActionType = AddPostActionType | ChangeNewTextActionType
| ChangeNewMessageBodyActionType | SendMessageActionType

export let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
      ],
      newPostText: ""
    },
    dialogsPage: {
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
      ],
      newMessageBody: ''
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },


  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber()
    // if (action.type === 'ADD-POST') {
    //   let newPost: postType = {
    //     id: Math.random(),
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0
    //   }
    //   this._state.profilePage.posts.push(newPost)
    //   this._callSubscriber()
    // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    //   this._state.profilePage.newPostText = action.newText
    //   this._callSubscriber()
    // } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
    //   this._state.messagesPage.newMessageBody = action.newBody
    //   this._callSubscriber()
    // } else if (action.type === 'SEND-MESSAGE') {
    //   let newMessage = {
    //     id: Math.random(),
    //     message: this._state.messagesPage.newMessageBody
    //   }
    //  this._state.messagesPage.messages.push(newMessage)
    //   this._callSubscriber()
    // }
  }
}
export const addPostActionCreator = () => ({type: "ADD-POST"}) as const;
export const updateNewPostActionCreator = (text:string):ChangeNewTextActionType =>
  ({type: "UPDATE-NEW-POST-TEXT", newText: text});

export const sendMessageCreator =():SendMessageActionType => ({type: "SEND-MESSAGE"});
export const updateNewMessageBodyCreator = (text:string):ChangeNewMessageBodyActionType =>
  ({type: "UPDATE-NEW-MESSAGE-BODY", newBody: text});
