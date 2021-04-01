import React from 'react';
import s from "./Learn.module.scss";

const Learn = (obj) => {
   return (
      <div className={s.value}>
         <div>Имя: {obj.value1}</div>
         <div>Возраст: {obj.value2}</div>
      </div>
   )
}
export default Learn;