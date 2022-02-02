import React, {useRef, useState} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";


const MyPosts = ({profilePage, ...props}: MyPostsPropsType) => {

  const [postText, setPostText] = useState<string>('')

  let newPostElement = useRef<HTMLTextAreaElement>(null)
  const addPost = () => {
    props.addPost(postText)
    setPostText('')
  }
  const onPostChange = () => {
    let text = newPostElement.current!.value
    setPostText(text)
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
                    value={postText}/>
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