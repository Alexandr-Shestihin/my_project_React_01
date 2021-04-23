import React from 'react';
import s from "./Train_CSS.module.scss";
//import _null_style from "./_null_style.module.scss";

const Train_CSS = (props) => {
   return (
      <div className={s.value}>
         <h1 className={`${s.text} ${s.main}`}>Фрилансер по жизни</h1>
      </div>
   )
}
export default Train_CSS;