import React from 'react';
import s from "./Nav.module.scss";

const Nav = () => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <a href="#">Profile</a>
         </div>

         <div className={s.item}>
            <a href="#">Massages</a>
         </div>
         <div className={`${s.item} ${s.item_g}`}>
            <a href="#">News</a>
         </div>
         <div className={s.item}>
            <a href="#">Music</a>
         </div>
         <div className={s.item}>
            <a href="#">Settings</a>
         </div>
      </nav>
   )
}
export default Nav;
