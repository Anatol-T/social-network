import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {postType} from "../../../index";

type propsType = {
  posts: Array<postType>
}
const MyPosts = ({posts}:propsType) => {

  let postsElements =
    posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )

}

export default MyPosts;