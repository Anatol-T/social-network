import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogType, massageType} from "../../index";


type propsType = {
  dialogs: Array<dialogType>
  messages: Array<massageType>
}
const Dialogs = ({dialogs, messages}:propsType) => {


  let dialogsElements =  dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />  );
  let messagesElements = messages.map( m => <Message key={m.id} message={m.message} /> );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs;