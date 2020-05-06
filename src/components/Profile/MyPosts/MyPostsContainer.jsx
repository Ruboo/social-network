import React from 'react';
import {updateNewPostTextActionCreator,addPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  let state = props.store.getState();


  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let postTyping = (text) => {
  let action = updateNewPostTextActionCreator(text);
   props.store.dispatch(action);
  }
  return (
    <MyPosts updateNewPostText ={postTyping} 
    addPost = {addPost} postsData = {state.profilePage.postsData}
      newPostText = {state.profilePage.newPostText}
    />
  )
}

export default MyPostsContainer;
