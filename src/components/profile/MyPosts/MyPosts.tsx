import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {TextArea} from "../../common/TextArea";


const MyPosts = ({profilePage, ...props}: MyPostsPropsType) => {

  const addPost = (postText:PostFormType) => {
    props.addPost(postText.postText)
  }

  let postsElements =
    profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddNewPostFormRedux onSubmit={addPost}/>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )

}

export default MyPosts;

type PostFormType = {
  postText: string
}
const maxLength20 = maxLengthCreator(20)

const AddNewPostForm: React.FC<InjectedFormProps<PostFormType>> = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field className={s.textArea} name="postText" component={TextArea}
      validate={[requiredField, maxLength20]}/>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm<PostFormType>({form: 'addNewPost'})(AddNewPostForm)