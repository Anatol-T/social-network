import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
//import Profile from "./components/profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import {dialogType, massageType, postType} from "./index";

type propsType = {
  posts: Array<postType>
  dialogs: Array<dialogType>
  messages: Array<massageType>
}
function App({posts, dialogs, messages}:propsType) {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile
          posts={posts}/>}/>
          <Route path='/dialogs' render={() => <Dialogs
            dialogs = {dialogs} messages={messages}/>}/>
          {/*<Route path='/profile' component={Profile}/>*/}
          {/*<Route path='/dialogs' component={Dialogs}/>*/}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
