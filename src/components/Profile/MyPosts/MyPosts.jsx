import React from 'react';
import s from "./MyPosts.module.scss";

const MyPosts = (props) => {

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
         </div>
         <button>Add post</button>
         <div className={s.posts}>
            {props.elements}
         </div>
      </div>
   )
}
export default MyPosts;