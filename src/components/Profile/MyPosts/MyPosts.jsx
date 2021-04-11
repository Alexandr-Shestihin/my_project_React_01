import React from 'react';
import s from "./MyPosts.module.scss";
import Posts from './Post/Post';

const MyPosts = (props) => {
   let postsElements = props.posts.map(p => (<Posts name={p.name} massage={p.massage} likes={p.likes} ava={p.ava} />))

   let newPost = React.createRef();
   let addPost = () => {
      props.addPost(newPost.current.value);
      newPost.current.value = "";
   }
   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div className={s.addPostBlock}>
            <div>
               <textarea ref={newPost}></textarea>
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