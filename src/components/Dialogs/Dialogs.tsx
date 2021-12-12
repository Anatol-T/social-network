import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
  ActionType,
  messagePageType,
  sendMessageCreator,
  updateNewMessageBodyCreator,
  updateNewPostActionCreator
} from "../../redux/state";


type propsType = {
  state: messagePageType
  dispatch: (action: ActionType) => void
}
const Dialogs = ({state, dispatch}: propsType) => {


  let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
  let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);

  const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
    const text = e.currentTarget.value;
    const action:ActionType = updateNewMessageBodyCreator(text)
    dispatch(action)
  }
  const onClickHandler = () => {
    dispatch(sendMessageCreator())
    dispatch(updateNewMessageBodyCreator(''))
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea onChange={onChangeHandler} value={state.newMessageBody}/>
        </div>
        <div >
          <button onClick={onClickHandler}>Send Message</button>
          </div>
      </div>

    </div>
  )
}

export default Dialogs;