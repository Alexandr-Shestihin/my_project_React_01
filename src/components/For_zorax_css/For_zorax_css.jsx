import React from 'react';
import Learn from "./Learn/Learn";
import s from "./For_zorax_css.module.scss";

let menu = {
   width: 200,
   height: 300,
   title: "My menu"
};

function multiplyNumeric(obj) {
   for (let key in obj) {
      if (typeof obj[key] == "number") {
         obj[key] *= 2;
      }
   }
}

multiplyNumeric(menu);
const For_zorax_css = () => {
   return (
      <div className={s.main}>
         <Learn value={menu.width} />
      </div>
   )
}
export default For_zorax_css;