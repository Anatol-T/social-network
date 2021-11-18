import React from 'react';
import s from './Post.module.css';

type propsType = {
  message: string,
  likesCount: number
}
const Post = (props: propsType) => {

  return (
    <div className={s.item}>
      <img src='data:image/jpeg;base64,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' alt='img'/>
      { props.message }
      <div>
        <span>likes</span>
        { props.likesCount }
      </div>
    </div>
  )
}

export default Post;