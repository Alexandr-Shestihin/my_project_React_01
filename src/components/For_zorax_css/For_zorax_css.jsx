import React from 'react';
import Learn from "./Learn/Learn";
import s from "./For_zorax_css.module.scss";

let user = {
   name: "Иван",
   age: 39,
}
let clone = {};
Object.assign(clone, user);

const For_zorax_css = () => {
   return (
      <div className={s.main}>
         <div className={s.main_container}>
            <div className={s.container}>
               Text
         </div>
         </div>
         <Learn value1={clone.name} value2={clone.age} />
      </div>
   )
}
export default For_zorax_css;