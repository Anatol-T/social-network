import React from "react";
import s from './Navbar.module.css';

// type RatingPropsType = {
//   value: 0 | 1 | 2 | 3 | 4 | 5
// }

export function Navbar () {
  return <nav className={s.nav}>
    <p className={s.item}>Profile</p>
    <p className={`${s.item} ${s.active}`}>Massages</p>
    <p>News</p>
    <p>Music</p>
    <p>Settings</p>
  </nav>;
}
