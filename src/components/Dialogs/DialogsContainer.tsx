import {Dispatch} from "redux";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";


type MapStatePropsType = {
  dialogsPage: DialogsPageType
  isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return (
    {
      dialogsPage: state.dialogsPage,
      isAuth: state.auth.isAuth
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