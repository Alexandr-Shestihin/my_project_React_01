import React from 'react';
import Learn from "./Learn/Learn";
import s from "./For_zorax_css.module.scss";

const For_zorax_css = () => {
   return (
      <div className={s.main}>
         {/* <div className={s.squere}></div> */}
         <div className={s.wrapper}>
            <div className={s.cube}>
               <div className={s.site + " " + s.site1}>1</div>
               <div className={s.site + " " + s.site2}>2</div>
               <div className={s.site + " " + s.site3}>3</div>
               <div className={s.site + " " + s.site4}>4</div>
               <div className={s.site + " " + s.site5}>5</div>
               <div className={s.site + " " + s.site6}>6</div>
            </div>
         </div>

         <Learn value1={21} value2={21} />
      </div>)
}
export default For_zorax_css;