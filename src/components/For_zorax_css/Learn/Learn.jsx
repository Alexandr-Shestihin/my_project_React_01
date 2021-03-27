import React from 'react';
import s from "./Learn.module.scss";

const Learn = (obj) => {
   return (
      <div className={s.value}>
         {obj.value}
      </div>
   )
}
export default Learn;