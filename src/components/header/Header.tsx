import React from "react";
import s from './Header.module.css';

// type AccordionPropsType = {
//   titleValue: string,
//   collapsed: boolean
// }

function Header() {
  return <header className={s.header}>
    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHgiTmJ_fhWk7tm8geycwaPonO8jglKuEyw&usqp=CAU" alt="image"/>
  </header>
}

export default Header;