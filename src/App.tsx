import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
//import Profile from "./components/profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";


function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        {/*<Profile/>*/}
        <Dialogs/>
      </div>

    </div>
  );
}

export default App;
