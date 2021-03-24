import React from 'react';
import s from "./MyPosts.module.scss";
import Posts from './Post/Post';

const MyPosts = () => {
   return (
      <div>
         <textarea name="" id="" cols="30" rows="10"></textarea>
         <button>Add post</button>
         <div>
            New post
               </div>
         <div className={s.posts}>
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
         </div>
      </div>
   )
}
export default MyPosts;