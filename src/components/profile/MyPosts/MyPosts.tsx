import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {postType} from "../../../redux/state";




type propsType = {
  posts: Array<postType>
  addPost: (message:string)=> void
}
const MyPosts = ({posts, ...props}: propsType) => {

  let newPostElement = useRef<HTMLTextAreaElement>(null)
  let addPost = ()=> {
    let text = newPostElement.current!.value
    props.addPost(text);
    newPostElement.current!.value = ""
  }

  let postsElements =
    posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}/>
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