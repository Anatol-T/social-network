import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfilePropsType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";


const ProfileInfo = (props: ProfilePropsType) => {
  if (!props.profile) {
    return <Preloader/>
  }
  //console.log(props.profile.fullName)
  return (
    <div>
      <div>
        <img
          src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
          alt='pct'/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large? props.profile.photos.large: ""} alt={props.profile.fullName}/>
        <div>Name: {props.profile.fullName}</div>
        <div>About me: {props.profile.aboutMe}</div>
        <div>Job: {props.profile.lookingForAJobDescription}</div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo;