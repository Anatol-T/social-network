import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
//import Profile from "./components/profile/profile";
import { Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
//import {Store} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



function App() {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer />}/>
          {/*<Route path='/profile' component={Profile}/>*/}
          {/*<Route path='/dialogs' component={Dialogs}/>*/}
        </div>
    </div>
  );
}

export default App;
