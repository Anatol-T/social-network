import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UsersStateType} from "./usersReducer";

export const getUsers = (state: AppStateType):UsersStateType => {
  return state.usersPage
}

export  const getUsersSelector = createSelector(getUsers, (usersPage:UsersStateType)=> {
  return usersPage
})