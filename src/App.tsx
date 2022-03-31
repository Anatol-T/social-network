import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Route, RouteComponentProps, withRouter} from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import {UsersContainer} from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import {LoginPage} from "./components/login/LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./redux/redux-store";
import {initializeAppTC} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import("./components/users/UsersContainer"))

type PathParamsType = {
  userID: string
}
type AppPropsType = RouteComponentProps<PathParamsType>
  & mapDispatchPropsType
  & MapStatePropsType

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
          <Route path='/users' render={() =>
            <React.Suspense fallback={<div>Loading...</div>}>
              <UsersContainer/>
            </React.Suspense>}
          />
          {/*<Route path='/users' component={UsersContainer}/>*/}
          <Route path='/login' component={LoginPage}/>
          {/*<Route path='/dialogs' component={Dialogs}/>*/}
        </div>
      </div>
    );
  }
}

type MapStatePropsType = {
  initialized: boolean
}
type mapDispatchPropsType = {
  initializeApp: () => void
}
const mapSateToProps = (state: AppStateType): MapStatePropsType => ({
  initialized: state.app.initialized
})

export default compose<React.ComponentType>(
  withRouter,
  connect(mapSateToProps, {initializeApp: initializeAppTC})
)(App);
