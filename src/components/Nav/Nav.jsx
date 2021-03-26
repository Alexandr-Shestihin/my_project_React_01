import React from 'react';
import s from "./Nav.module.scss";

const Nav = () => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <a href="/Profile">Profile</a>
         </div>

         <div className={s.item}>
            <a href="/Dialogs">Massages</a>
         </div>
         <div className={`${s.item} ${s.item_g}`}>
            <a href="/News">News</a>
         </div>
         <div className={s.item}>
            <a href="/Music">Music</a>
         </div>
         <div className={s.item}>
            <a href="/Settings">Settings</a>
         </div>
      </nav>
   )
}
export default Nav;
