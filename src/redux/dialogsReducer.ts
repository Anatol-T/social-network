export type DialogType = {
  id: number,
  name: string
}
export type MassageType = {
  id: number
  message: string
}
export type DialogsPageType = typeof initialState

const initialState = {
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
  ] as Array<DialogType>,
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
  ] as Array<MassageType>,
  newMessageBody: ''
}

 const dialogsReducer = (state:DialogsPageType = initialState, action: ActionsType):DialogsPageType => {
   switch (action.type) {
     case "UPDATE-NEW-MESSAGE-BODY":
       return {...state, newMessageBody: action.newBody}
     case "SEND-MESSAGE":
       let newMessage = {
         id: Math.random(),
         message: state.newMessageBody
       }
       return {...state, messages: [ ...state.messages, newMessage], newMessageBody: ""}
     default:
       return state
   }
}
export default dialogsReducer;

type ActionsType = ChangeNewMessageBodyActionType | SendMessageActionType;

type ChangeNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const sendMessageAC =() => ({type: "SEND-MESSAGE"}) as const;
export const updateNewMessageBodyAC = (text:string) => {
  return {
    type: "UPDATE-NEW-MESSAGE-BODY",
    newBody: text
  } as const
}