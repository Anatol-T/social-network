import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {ProfilePropsType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import defaultAvatar from '../../../assets/defaultAvatar.png'
import {ProfileType} from "../../../redux/profileReducer";
import {ProfileDataForm} from "./ProfileDataForm";


const ProfileInfo = (props: ProfilePropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false)
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
      <div className={s.descriptionBlock}>
        <img src={Object.keys(props.profile).length !== 0  && props.profile.photos.large ? props.profile!.photos!.large : defaultAvatar}
             alt={props.profile.fullName}
             style={{width: "150px", height: "150px", borderRadius: "50%"}}
        />
        {editMode
          ? <ProfileDataForm setEditMode={setEditMode} userID={props.profile.userId} initialValues={props.profile}/>
          : <ProfileData profile={props.profile}
                      isOwner={props.profile.userId === props.currentUserId}
                      setEditMode={setEditMode}
        />}
        {!props.match.params.userID && <input type={"file"} onChange={addFileHandler}/>}
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo;
type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  setEditMode: (isEdit: boolean) => void
}
const ProfileData = ({profile, isOwner, setEditMode}: ProfileDataPropsType) => {

  return (
    <div>
      {isOwner && <div><button onClick={()=> setEditMode(true)}>Edit profile</button></div>}
      <div>
        <b>Full name: </b> {profile?.fullName}
      </div>
      <div>
        <b>About me: </b> {profile?.aboutMe}
      </div>
      <div>
        <b>Looking for a job: </b> {profile?.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>My professional skills: </b> {profile?.lookingForAJobDescription}
      </div>
    </div>
  )
}