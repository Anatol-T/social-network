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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
  switch (action.type) {
    case "SEND-MESSAGE":
      let newMessage = {
        id: Math.random(),
        message: action.newMassage
      }
      return {...state, messages: [...state.messages, newMessage]}
    default:
      return state
  }
}
export default dialogsReducer;

type ActionsType = SendMessageActionType;

type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMassage: string) => (
  {type: "SEND-MESSAGE", newMassage}) as const;
