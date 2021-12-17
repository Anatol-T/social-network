import {ActionType, dialogsPageType} from "./store";

let initialState:dialogsPageType ={
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

 const dialogsReducer = (state:dialogsPageType = initialState, action: ActionType):dialogsPageType => {
   switch (action.type) {
     case "UPDATE-NEW-MESSAGE-BODY":
       state.newMessageBody = action.newBody
       return state
     case "SEND-MESSAGE":
       let newMessage = {
         id: Math.random(),
         message: state.newMessageBody
       }
       state.messages.push(newMessage)
       return state
     default:
       return state
   }
}
export default dialogsReducer;