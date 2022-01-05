import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


export function Navbar() {
  return <nav className={s.nav}>
    <div>
      <NavLink to="/profile" className={s.item} activeClassName={s.active}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Massages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/users" className={s.item} activeClassName={s.active}>Users</NavLink>
    </div>
    <p>News</p>
    <p>Music</p>
    <p>Settings</p>
  </nav>;
}
