import React from 'react';
import s from "./Post.module.scss";

const Post = (obj) => {
   return (
      <div className={s.item}>
         <img src={obj.ava} />
         <span className={s.massage}>{obj.massage}</span>
         <div className={s.name}>{obj.name}</div>
         <button className={s.likes}>Likes: {obj.likes}</button>
      </div>
   )
}
export default Post;