import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../redux/profileReducer";

class ProfileContainer extends Component<ProfilePropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

export default connect(mapSateToProps,
  {setUserProfile: setUserProfileAC})(ProfileContainer)
//ProfileContainer.propTypes = {};

