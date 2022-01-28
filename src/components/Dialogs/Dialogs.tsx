import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType} from "./DialogsContainer";


const Dialogs = ({dialogsPage, updateNewMassageBody, sendMessage}: DialogPropsType) => {

  let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
  let messagesElements = dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>);

  const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
    const text = e.currentTarget.value;
   updateNewMassageBody(text)
  }
  const onClickHandler = () => {
    sendMessage()
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea onChange={onChangeHandler} value={dialogsPage.newMessageBody}/>
        </div>
        <div >
          <button onClick={onClickHandler}>Send Message</button>
          </div>
      </div>

    </div>
  )
}

export default Dialogs;