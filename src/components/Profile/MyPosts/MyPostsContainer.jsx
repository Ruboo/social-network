import React from 'react';
import { addPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText

  }
}
const mapsDispatchToProps = (dispatch) => {
  // this.setState({
  //   profilePage: {newPostText: ''}
  // })
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
     
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapsDispatchToProps)(MyPosts)


export default MyPostsContainer;
