import React from 'react';
import s from "./ProfileInfo.module.scss";
import Preload from '../../common/preload/Preload';

const ProfileInfo = (props) => {
   if (props.profile.length === 0) {
      return <Preload />
   }
   return (
      <div>
         <div>
            <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/02/13/fioletovyj-pejzazh.jpg" />
         </div>
         <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
            ava+description
         </div>
      </div>
   )
}
export default ProfileInfo;