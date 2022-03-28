import profileReducer, {addPostAC, PostType, ProfileType} from "./profileReducer";

test('new post should be added', ()=>{
  const state = {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 11},
      {id: 4, message: 'Dada', likesCount: 11}
    ] as Array<PostType>,
    profile: null as ProfileType,
    status: "",
  }
  const action = addPostAC('new post')
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(5)
  expect(newState.posts[4].likesCount).toBe(0)
  expect(newState.posts[4].message).toBe('new post')
})