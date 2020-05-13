import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();


//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }

//   let postTyping = (text) => {
//   let action = updateNewPostTextActionCreator(text);
//    props.store.dispatch(action);
//   }
//   return (
//     <MyPosts updateNewPostText ={postTyping} 
//     addPost = {addPost} postsData = {state.profilePage.postsData}
//       newPostText = {state.profilePage.newPostText}
//     />
//   )
// }

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText

  }
}
const mapsDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());

    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapsDispatchToProps)(MyPosts)


export default MyPostsContainer;
