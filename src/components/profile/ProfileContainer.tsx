import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfileTC} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainer extends Component<ProfilePropsType> {

  componentDidMount() {
    const userID: number = this.props.match.params.userID ? +this.props.match.params.userID : 2

    this.props.setUserProfile(userID)

  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'}/>
    return (
      <div>
        <Profile {...this.props}/>
      </div>
    );
  }
}

type MapStatePropsType = {
  profile: ProfileType
  isAuth: boolean
}
const mapSateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

type MapDispatchPropsType = { setUserProfile: (userID:number) => void }
type OwnProfilePropsType = MapStatePropsType & MapDispatchPropsType
type PathParamsType = {
  userID: string
}
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapSateToProps,
  {setUserProfile: setUserProfileTC})(WithUrlDataContainerComponent)
//ProfileContainer.propTypes = {};

