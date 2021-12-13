import {ActionType, StateType} from "./state";

 const dialogsReducer = (state:StateType, action: ActionType):StateType => {
   switch (action.type) {
     case "UPDATE-NEW-MESSAGE-BODY":
       state.messagesPage.newMessageBody = action.newBody
       return state
     case "SEND-MESSAGE":
       let newMessage = {
         id: Math.random(),
         message: state.messagesPage.newMessageBody
       }
       state.messagesPage.messages.push(newMessage)
       return state
     default:
       return state
   }
  // if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
  //   state.messagesPage.newMessageBody = action.newBody
  // } else if (action.type === 'SEND-MESSAGE') {
  //   let newMessage = {
  //     id: Math.random(),
  //     message: state.messagesPage.newMessageBody
  //   }
  //   state.messagesPage.messages.push(newMessage)
  // }
  // return state
}
export default dialogsReducer;