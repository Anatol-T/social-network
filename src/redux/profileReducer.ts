export type PostType = {
  id: number,
  message: string,
  likesCount: number
}

export type profilePageType = typeof initialState
const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 11},
    {id: 4, message: 'Dada', likesCount: 11}
  ] as Array<PostType>,
  newPostText: ""
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
    default:
      return state;
  }

}

export default profileReducer;

type ActionsType = AddPostActionType | ChangeNewTextActionType;
type AddPostActionType = ReturnType<typeof addPostAC>;
type ChangeNewTextActionType = ReturnType<typeof updateNewPostAC>

export const addPostAC = () => ({
  type: "ADD-POST"}
) as const
export const updateNewPostAC = (text:string) =>
  ({type: "UPDATE-NEW-POST-TEXT", newText: text}) as const;