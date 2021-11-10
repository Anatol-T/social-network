import React from "react";
//import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

// type RatingPropsType = {
//   value: 0 | 1 | 2 | 3 | 4 | 5
// }

export default function Profile () {
  return (
    <div >
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt='img' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}