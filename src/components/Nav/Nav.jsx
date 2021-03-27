import React from 'react';
import s from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
         </div>

         <div className={s.item}>
            <NavLink to="/Dialogs" activeClassName={s.active}>Massages</NavLink>
         </div>
         <div className={`${s.item}`}>
            <NavLink to="/News" activeClassName={s.active}>News</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/For_zorax_css" activeClassName={s.active}>For_zorax_css</NavLink>
         </div>
      </nav>
   )
}
export default Nav;
