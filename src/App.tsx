import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
//import Profile from "./components/profile/profile";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import {Store} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type propsType = {
  store: Store
}

function App({store}: propsType) {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile
            store={store}/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer
            store={store}/>}/>
          {/*<Route path='/profile' component={Profile}/>*/}
          {/*<Route path='/dialogs' component={Dialogs}/>*/}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
