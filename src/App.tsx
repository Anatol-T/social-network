import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
//import Profile from "./components/profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import {stateType} from "./redux/state";

type propsType = {
  state: stateType
  addPost: (message:string)=> void
}

function App({state, addPost}: propsType) {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile
            state={state.profilePage}
            addPost={addPost}/>}/>
          <Route path='/dialogs' render={() => <Dialogs
            state={state.messagesPage}/>}/>
          {/*<Route path='/profile' component={Profile}/>*/}
          {/*<Route path='/dialogs' component={Dialogs}/>*/}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
