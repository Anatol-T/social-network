import {Dispatch} from "redux";
import {profileAPI} from "../api/API";
import {ThunkDispatch} from "redux-thunk";

export type PostType = {
  id: number,
  message: string,
  likesCount: number
}
type Photos = {
  small: string | null,
  large: string | null
}
export type ProfileType = {
  aboutMe: string,
  contacts: {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
  },
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  userId: number,
  photos: Photos
}

export type profilePageType = typeof initialState
const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
  ] as Array<PostType>,
  profile: {} as ProfileType,
  status: "",
}
const profileReducer = (state:profilePageType=initialState, action: ActionsType):profilePageType => {
  switch (action.type) {
    case "ADD-POST":
      let newPost: PostType = {
        id: Math.random(),
        message: action.newPost,
        likesCount: 0
      }
      return {...state, posts: [...state.posts, newPost]};
    case "SET-USER-PROFILE":
      return {...state, profile: action.profile}
    case "SET-STATUS":
      return {...state, status: action.status}
    case "SET-USER-PHOTO":
      return {...state, profile:  {...state.profile, photos: action.photos} }
    default:
      return state;
  }

}

export default profileReducer;

type ActionsType = AddPostActionType |  SetUserProfileACType | SetStatusACType | SetUserPhotoACType;
type AddPostActionType = ReturnType<typeof addPostAC>;

type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
type SetStatusACType = ReturnType<typeof setStatusAC>
type SetUserPhotoACType = ReturnType<typeof setUserPhotoAC>

export const addPostAC = (newPost:string) => ({type: "ADD-POST", newPost}
) as const

export const setUserProfileAC = (profile: ProfileType) => ({
  type: "SET-USER-PROFILE",
  profile
})as const
const setStatusAC = (status: string) => ({
  type: "SET-STATUS",
  status
})as const
const setUserPhotoAC = (photos: Photos) => ({
  type: "SET-USER-PHOTO",
  photos
})as const

export const setUserProfileTC = (userID:number) => {
return (dispatch:Dispatch) => {
  profileAPI.getProfile(userID)
    .then(response => {
      dispatch(setUserProfileAC(response.data))
    })
  }
}
export const getStatusTC = (userID:number) => {
  return (dispatch:Dispatch) => {
    profileAPI.getStatus(userID)
      .then(res => {
          dispatch(setStatusAC(res.data))
      })
  }
}

export const updateStatusTC = (status:string) => {
  return (dispatch:Dispatch) => {
    profileAPI.updateStatus(status)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setStatusAC(status))
        }
      })
  }
}

export const savePhotoTC = (file:File) => {
  return (dispatch:Dispatch) => {
    profileAPI.savePhoto(file)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setUserPhotoAC(res.data.data.photos))
        }
      })
  }
}

export const saveProfileTC = (profile:Object, userID:number) => {
  return (dispatch:ThunkDispatch<any, any, any>) => {
    profileAPI.saveProfile(profile)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setUserProfileTC(userID))
        }
      })
  }
}