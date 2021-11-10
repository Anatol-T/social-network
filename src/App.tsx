import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
//import Profile from "./components/profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/profile";


function App() {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
      <Header/>
      <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
          {/*<Profile/>*/}
          {/*<Dialogs/>*/}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
