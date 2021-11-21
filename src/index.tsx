import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type dialogType = {
  id: number,
  name: string
}
export type massageType = {
  id: number
  message: string
}
let dialogs: Array<dialogType> = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrew'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'}
]

let messages: Array<massageType> = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your it-kamasutra?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'}
]
export type postType = {
  id: number,
  message: string,
  likesCount: number
}
let posts: Array<postType> = [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 2, message: 'It\'s my first post', likesCount: 11},
  {id: 3, message: 'Blabla', likesCount: 11},
  {id: 4, message: 'Dada', likesCount: 11}
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
