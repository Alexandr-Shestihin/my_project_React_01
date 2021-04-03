import React from 'react';
import s from "./MyPosts.module.scss";
import Posts from './Post/Post';

const MyPosts = (props) => {

   let postsElements = props.posts.map(p => (<Posts name={p.name} massage={p.massage} likes={p.likes} ava={p.ava} />))
   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
         </div>
         <button>Add post</button>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
}
export default MyPosts;