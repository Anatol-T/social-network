//import React from 'react';



import {rerenderEntireTree} from "./render";
import state from "./redux/state";

// export let rerenderEntireTree = ()=> {
// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state} addPost={addPost}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// }
rerenderEntireTree(state)

