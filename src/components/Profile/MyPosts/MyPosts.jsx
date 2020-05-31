import React, { createRef } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      <Field name = 'newPostText' component = 'textarea' /> 
      </div>
      <div>
        <button >Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({
  form:'ProfileAddNewPostForm'
})(AddNewPostForm)


const MyPosts = (props) => {
  let postsElement = 
  props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);


  let newPostElement = React.createRef();
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (

    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={classes.posts}>
        {postsElement}
      </div>
    </div>
  )
}




export default MyPosts;
