import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
//import Profile from "./components/profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import {ActionType, StateType} from "./redux/state";

type propsType = {
  state: StateType
  dispatch: (action: ActionType) => void
}

function App({state, dispatch}: propsType) {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile
            state={state.profilePage}
            dispatch={dispatch}/>}/>
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
