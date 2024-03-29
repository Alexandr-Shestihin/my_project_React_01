import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
   }
}

const MyPostsContainer = connect(mapStateToProps, { addPostActionCreator })(MyPosts);

export default MyPostsContainer;