import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import { Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";



function App() {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer />}/>
          <Route path='/users' component={UsersContainer}/>
          {/*<Route path='/dialogs' component={Dialogs}/>*/}
        </div>
    </div>
  );
}

export default App;
