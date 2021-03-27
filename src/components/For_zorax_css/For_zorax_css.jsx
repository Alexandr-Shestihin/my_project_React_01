import React from 'react';
import s from "./For_zorax_css.module.scss";
import Js from './JS/Js';

const user = {
   name: "John",
}
user.name = "Pete";

const For_zorax_css = () => {
   return (
      <div className={s.main}>
         <Js name={user.name} />
         {/* <h1>Заголовок h1</h1>
         <h2 className="list">Заголовок h2</h2>
         <ul className="list">
            <h4>Заголовок h4</h4>
            <li>list 1</li>
            <li>list 2</li>
            <li></li>
            <h4>Заголовок h4</h4>
         </ul> */}
      </div>
   )
}
export default For_zorax_css;