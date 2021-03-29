import React from 'react';
import s from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
   return (
      <div>
         <div>
            <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/02/13/fioletovyj-pejzazh.jpg" />
         </div>
         <div className={s.descriptionBlock}>
            ava+description
         </div>
      </div>
   )
}
export default ProfileInfo;