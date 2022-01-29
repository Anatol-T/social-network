import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatusTC, ProfileType, setUserProfileTC, updateStatusTC} from "../../redux/profileReducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component<ProfilePropsType> {

  componentDidMount() {
    const userID: number = this.props.match.params.userID ? +this.props.match.params.userID : 21565

    this.props.setUserProfile(userID)
    this.props.getStatus(userID)
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
}
const mapSateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})
type MapDispatchPropsType = {
  setUserProfile: (userID:number) => void
  getStatus: (userID: number) => void
  updateStatus: (status: string) => void
}

type OwnProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
  userID: string
}
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType

export default compose<React.ComponentType>(
  connect(mapSateToProps, {setUserProfile: setUserProfileTC,
  getStatus: getStatusTC,
  updateStatus: updateStatusTC}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
