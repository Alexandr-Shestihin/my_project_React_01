import React from 'react';
import s from "./Profile.module.scss";

const Profile = () => {
   return (
      <div className={s.content}>
         <div>
            <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/02/13/fioletovyj-pejzazh.jpg" />
         </div>
         <div>
            ava+description
               <img src="http://risovach.ru/upload/2019/04/generator/chernyy-vlastelin_205750111_orig_.jpg" />
         </div>
         <div>
            My posts
               <div>
               New post
               </div>
            <div>
               <div className={s.item}>
                  post 1
                  </div>
               <div className={s.item}>
                  post 2
                  </div>
            </div>
         </div>
      </div>
   )
}
export default Profile;