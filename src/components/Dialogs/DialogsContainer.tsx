import {compose, Dispatch} from "redux";
import Dialogs from "./Dialogs";
import { connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DialogsPageType, sendMessageAC} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";


type MapStatePropsType = {
  dialogsPage: DialogsPageType
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return (
    {
      dialogsPage: state.dialogsPage,
    }
  )
}

type MapDispatchPropsType = {
  sendMessage: (newMassage:string)=> void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return (
    {
      sendMessage: (newMassage:string) => {
        dispatch(sendMessageAC(newMassage))
      }
    })
}
export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

// const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
export default DialogsContainer;