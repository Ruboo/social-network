import React, { createRef } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Button } from '@material-ui/core';
import {updateNewPostTextActionCreator,addPostActionCreator} from './../../../redux/profileReducer';


const MyPosts = (props) => {

  let postsElement = props.postsData.map(post => <Post 
        message={post.message} 
        likesCount={post.likesCount} />);
  let newPostElement = React.createRef();
  let addPost = () => {
    //props.addPost();
    props.dispatch(addPostActionCreator());
  }

  let postTyping = () => {
    let text = newPostElement.current.value;
   // props.updateNewPostText(text);
  let action = updateNewPostTextActionCreator(text);
   props.dispatch(action);
  }
  return (

    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange = {postTyping}
                    value = {props.newPostText}
                    ref = {newPostElement}>
            
            </textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>

      <div className={classes.posts}>
        {postsElement}
        {/*<Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />*/}
      </div>
    </div>
  )
}

export default MyPosts;
