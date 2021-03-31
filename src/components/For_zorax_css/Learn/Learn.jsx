import React from 'react';
import s from "./Learn.module.scss";

const Learn = (obj) => {
   return (
      <div className={s.value}>
         <div>Сумма: {obj.value1}</div>
         <div>Произведение: {obj.value2}</div>
      </div>
   )
}
export default Learn;