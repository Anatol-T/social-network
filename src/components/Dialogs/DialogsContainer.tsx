//import React from "react";
import {
  ActionType,
  dialogsPageType,
  sendMessageCreator, StateType,
  updateNewMessageBodyCreator
} from "../../redux/store";
import {Dispatch} from "redux";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// type propsType = {
//   store: Store
// }
// const DialogsContainer = ({store}: propsType) => {
//   const state:dialogsPageType = store.getState().dialogsPage
//
//
//   const onNewMessageChange = (text:string) =>{
//     const action:ActionType = updateNewMessageBodyCreator(text)
//     store.dispatch(action)
//   }
//   const onSendMassageClick = () => {
//     store.dispatch(sendMessageCreator())
//     store.dispatch(updateNewMessageBodyCreator(''))
//   }
//   return (
//     <Dialogs dialogsPage={state}
//       updateNewMassageBody={onNewMessageChange} sendMessage={onSendMassageClick}/>
//   )
// }
const mapStateToProps = (state: StateType): { dialogsPage: dialogsPageType } => {
  return (
    {
      dialogsPage: state.dialogsPage
    }
  )
}
const mapDispatchToProps = (dispatch: Dispatch):
  {updateNewMassageBody: (text:string)=> void
    sendMessage: ()=> void } => {
  return (
    {
      updateNewMassageBody: (text:string) => {
        const action:ActionType = updateNewMessageBodyCreator(text)
        dispatch(action)
      },
      sendMessage: () => {
        dispatch(sendMessageCreator())
        dispatch(updateNewMessageBodyCreator(''))
      }
    })
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;