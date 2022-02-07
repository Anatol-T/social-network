import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import stl from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AuthStateType, getUserDataTC, logoutTC} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../common/Preloader";


function Header() {
  const dispatch = useDispatch()
  const auth = useSelector<AppStateType, AuthStateType>(state=> state.auth)

  useEffect(()=> {
    dispatch(getUserDataTC())
  },[dispatch])

  const logout = () => {
    dispatch(logoutTC())
  }

  return <header className={stl.header}>
    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHgiTmJ_fhWk7tm8geycwaPonO8jglKuEyw&usqp=CAU" alt="image"/>
    <div className={stl.loginBlock}>
      {auth.isFetching ? <Preloader/> : <div>
        {auth.isAuth  && `User: ${auth.login}`}
        {!auth.isAuth &&  <NavLink to={'/login'}>Login</NavLink>}
      </div>}
      <div>
        {auth.isAuth  && <button onClick={logout} className={stl.logoutButton}>Log out</button>}
      </div>
    </div>
  </header>
}

export default Header;