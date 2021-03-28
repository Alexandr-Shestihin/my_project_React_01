import React from 'react';
import Learn from "./Learn/Learn";
import s from "./For_zorax_css.module.scss";

const For_zorax_css = () => {
   return (
      <div className={s.main}>
         <div className={s.main_container}>
            <div className={s.container}>
               Text
         </div>
         </div>
         {/* <Learn value={1234} /> */}
      </div>
   )
}
export default For_zorax_css;