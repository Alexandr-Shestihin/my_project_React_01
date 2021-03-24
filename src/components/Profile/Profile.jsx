import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.scss";

const Profile = () => {
   return (
      <div className={s.content}>
         <div>
            <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/02/13/fioletovyj-pejzazh.jpg" />
         </div>
         <div>
            ava+description
         </div>
         <MyPosts />
      </div>
   )
}
export default Profile;