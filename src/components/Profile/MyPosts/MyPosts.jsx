import React from 'react';
import s from "./MyPosts.module.scss";
import Posts from './Post/Post';
import { addPostActionCreator } from '../../../redux/state';
import { updateNewPostTextActionCreator } from '../../../redux/state';

const MyPosts = (props) => {
   let postsElements = props.posts.map(p => (<Posts name={p.name} massage={p.massage} likes={p.likes} ava={p.ava} />))

   let addPost = () => {
      props.dispatch(addPostActionCreator())
   }

   let onPostChange = (e) => {
      let text = e.target.value;
      props.dispatch(updateNewPostTextActionCreator(text));
   }

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div className={s.addPostBlock}>
            <div>
               <textarea
                  value={props.newPostText}
                  onChange={onPostChange}
               />
            </div>
            <button onClick={addPost}>Add post</button>
         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div >
   )
}
export default MyPosts;