import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {postType} from "../../../redux/state";




type propsType = {
  posts: Array<postType>
  newPostText: string
  updateNewPostText: (text:string)=> void
  addPost: ()=> void
}
const MyPosts = ({posts, newPostText, ...props}: propsType) => {

  let newPostElement = useRef<HTMLTextAreaElement>(null)
  let addPost = ()=> {
    props.addPost();
    props.updateNewPostText('')
  }
  const onPostChange = () => {
    let text = newPostElement.current!.value
    props.updateNewPostText(text)
  }

  let postsElements =
    posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}
                    onChange={onPostChange}
                    value={newPostText}/>
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