import s from "../Dialogs.module.css";
import React from "react";

export type messagePropsType = {
  message: string
}
export const Message = (props: messagePropsType) => {
  return <div className={s.dialog}>{props.message}</div>
}