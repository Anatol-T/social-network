import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import stl from './Header.module.css';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AuthStateType, getUserDataAC, setUserDataAC} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../common/Preloader";

// type AccordionPropsType = {
//   titleValue: string,
//   collapsed: boolean
// }

function Header() {
  const dispatch = useDispatch()
  const auth = useSelector<AppStateType, AuthStateType>(state=> state.auth)
  useEffect(()=> {
    dispatch(getUserDataAC())
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
      {withCredentials: true})
      .then(response => {
        if (response.data.resultCode === 0) {
          console.log('fetch')
          dispatch(setUserDataAC(response.data.data.id, response.data.data.email, response.data.data.login))
        }
      })
  },[dispatch])
  return <header className={stl.header}>
    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHgiTmJ_fhWk7tm8geycwaPonO8jglKuEyw&usqp=CAU" alt="image"/>
    <div className={stl.loginBlock}>
      {auth.isFetching ? <Preloader/> : <div>
        {auth.isAuth  && `User: ${auth.login}`}
        {!auth.isAuth &&  <NavLink to={'/login'}>Login</NavLink>}
      </div>}

    </div>
  </header>
}

export default Header;