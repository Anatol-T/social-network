import {AppStateType} from "./redux-store";

export const getUsers = (state: AppStateType) => {
  return state.usersPage
}