import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatusTC, ProfileType, savePhotoTC, setUserProfileTC, updateStatusTC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component<ProfilePropsType> {
  refreshProfile() {
    if (this.props.currentUserId) {
      const userID: number = this.props.match.params.userID
        ? +this.props.match.params.userID
        : this.props.currentUserId

      this.props.setUserProfile(userID)
      this.props.getStatus(userID)
    } else {
      this.props.history.push("/login")
    }
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>) {
    if (this.props.match.params.userID !== prevProps.match.params.userID) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <div>
        <Profile {...this.props}/>
      </div>
    );
  }
}


export type MapStatePropsType = {
  profile: ProfileType
  status: string
  currentUserId: number | null
}
const mapSateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  currentUserId: state.auth.userID,
})
type MapDispatchPropsType = {
  setUserProfile: (userID: number) => void
  getStatus: (userID: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
}

type OwnProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
  userID: string
}
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType

export default compose<React.ComponentType>(
  connect(mapSateToProps, {
    setUserProfile: setUserProfileTC,
    getStatus: getStatusTC,
    savePhoto: savePhotoTC,
    updateStatus: updateStatusTC
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
