import {Dispatch} from "redux";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";


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
type MapStatePropsType = {
  dialogsPage: DialogsPageType
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return (
    {
      dialogsPage: state.dialogsPage
    }
  )
}

type MapDispatchPropsType = {
  updateNewMassageBody: (text:string)=> void
  sendMessage: ()=> void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return (
    {
      updateNewMassageBody: (text:string) => {
        dispatch(updateNewMessageBodyAC(text))
      },
      sendMessage: () => {
        dispatch(sendMessageAC())
      }
    })
}
export type DialogPropsType = MapStatePropsType & MapDispatchPropsType
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;