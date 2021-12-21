import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { profilePageType} from "../../../redux/store";


type propsType = {
  profilePage: profilePageType
  // posts: Array<postType>
  // newPostText: string
  addPost: () => void
  updateNewPostText: (text: string) => void
}
const MyPosts = ({profilePage, ...props}: propsType) => {


  let newPostElement = useRef<HTMLTextAreaElement>(null)
  const addPost = () => {
    props.addPost()
  }
  const onPostChange = () => {
    let text = newPostElement.current!.value
    props.updateNewPostText(text)
  }

  let postsElements =
    profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}
                    onChange={onPostChange}
                    value={profilePage.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )

}

export default MyPosts;