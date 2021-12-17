import React from "react";
import {
  ActionType,
  dialogsPageType,
  sendMessageCreator,
  updateNewMessageBodyCreator
} from "../../redux/store";
import {Store} from "redux";
import Dialogs from "./Dialogs";


type propsType = {
  store: Store
}
const DialogsContainer = ({store}: propsType) => {
  const state:dialogsPageType = store.getState().dialogsPage


  const onNewMessageChange = (text:string) =>{
    const action:ActionType = updateNewMessageBodyCreator(text)
    store.dispatch(action)
  }
  const onSendMassageClick = () => {
    store.dispatch(sendMessageCreator())
    store.dispatch(updateNewMessageBodyCreator(''))
  }
  return (
    <Dialogs dialogsPage={state}
      updateNewMassageBody={onNewMessageChange} sendMessage={onSendMassageClick}/>
  )
}

export default DialogsContainer;