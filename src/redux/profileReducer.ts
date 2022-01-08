export type PostType = {
  id: number,
  message: string,
  likesCount: number
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
  photos: {
    small: string | null,
    large: string | null
  }
} | null

export type profilePageType = typeof initialState
const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 11},
    {id: 4, message: 'Dada', likesCount: 11}
  ] as Array<PostType>,
  newPostText: "",
  profile: null as ProfileType
}
const profileReducer = (state:profilePageType=initialState, action: ActionsType):profilePageType => {
  switch (action.type) {
    case "ADD-POST":
      let newPost: PostType = {
        id: Math.random(),
        message: state.newPostText,
        likesCount: 0
      }
      return {...state, posts: [...state.posts, newPost], newPostText: ""};
    case "UPDATE-NEW-POST-TEXT":
      return {...state, newPostText: action.newText};
    case "SET-USER-PROFILE":
      return {...state, profile: action.profile}
    default:
      return state;
  }

}

export default profileReducer;

type ActionsType = AddPostActionType | ChangeNewTextActionType | SetUserProfileACType;
type AddPostActionType = ReturnType<typeof addPostAC>;
type ChangeNewTextActionType = ReturnType<typeof updateNewPostAC>
type SetUserProfileACType = ReturnType<typeof setUserProfileAC>

export const addPostAC = () => ({
  type: "ADD-POST"}
) as const
export const updateNewPostAC = (text:string) =>
  ({type: "UPDATE-NEW-POST-TEXT", newText: text}) as const;
export const setUserProfileAC = (profile: ProfileType) => ({
  type: "SET-USER-PROFILE",
  profile
})as const