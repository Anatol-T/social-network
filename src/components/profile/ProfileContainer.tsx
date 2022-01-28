import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfileTC} from "../../redux/profileReducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component<ProfilePropsType> {

  componentDidMount() {
    const userID: number = this.props.match.params.userID ? +this.props.match.params.userID : 2

    this.props.setUserProfile(userID)

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
  //isAuth: boolean
}
const mapSateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
})
type MapDispatchPropsType = { setUserProfile: (userID:number) => void }

type OwnProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
  userID: string
}
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType

export default compose<React.ComponentType>(
  connect(mapSateToProps, {setUserProfile: setUserProfileTC}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
