import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainer extends Component<ProfilePropsType> {

  componentDidMount() {
    const userID = this.props.match.params.userID ? this.props.match.params.userID : 2
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then(response => {
        // this.props.toggleIsFetching(false)
        this.props.setUserProfile(response.data)
        // this.props.setTotalCount(+response.data.totalCount)
      })
  }

  render() {
    return (
      <div>
        <Profile {...this.props}/>
      </div>
    );
  }
}

type MapStatePropsType = {
  profile: ProfileType
}
const mapSateToProps = (state: AppStateType):MapStatePropsType => ({
  profile: state.profilePage.profile
})

type MapDispatchPropsType = {setUserProfile: (profile: ProfileType)=> void}
type OwnProfilePropsType = MapStatePropsType & MapDispatchPropsType
type PathParamsType = {
  userID: string
}
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapSateToProps,
  {setUserProfile: setUserProfileAC})(WithUrlDataContainerComponent)
//ProfileContainer.propTypes = {};

