import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {ProfilePropsType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import defaultAvatar from '../../../assets/defaultAvatar.png'


const ProfileInfo = (props: ProfilePropsType) => {
  if (!props.profile) {
    return <Preloader/>
  }
  const addFileHandler = (e:ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files){
      props.savePhoto(e.currentTarget.files[0])
    }
  }
  return (
    <div>
      <div>
        <img
          src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
          alt='pct'/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large? props.profile.photos.large: defaultAvatar}
             alt={props.profile.fullName}
             style={{width: "150px", height: "150px", borderRadius: "50%"}}
        />
        <div>Name: {props.profile.fullName}</div>
        <div>About me: {props.profile.aboutMe}</div>
        <div>Job: {props.profile.lookingForAJobDescription}</div>
        {!props.match.params.userID && <input type={"file"} onChange={addFileHandler}/>}
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo;