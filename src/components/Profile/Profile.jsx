import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from "./Profile.module.scss";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
   return (
      <div>
         <ProfileInfo />
         <MyPostsContainer
            store={props.store}
         />
      </div>
   )
}
export default Profile;