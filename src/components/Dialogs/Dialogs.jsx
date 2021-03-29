import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Dialogs.module.scss";

const Dialog = (obj) => {
   let path = "/Dialogs/" + obj.id
   return (
      <div >
         <NavLink to={path} className={s.dialog} activeClassName={s.active}>{obj.name}</NavLink>
      </div>
   )
}
const Massages = (props) => {
   return (
      <div className="message">{props.messages}</div>
   )
}

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div>
            <div className={s.dialogs_items}>
               <Dialog name="Чёрный властелин" id="0" />
               <Dialog name="Ян" id="3" />
               <Dialog name="Александр" id="4" />
               <Dialog name="Белый властелин" id="7" />
               <Dialog name="Иван" id="8" />
            </div>
         </div>
         <div className={s.messages}>
            <Massages messages="Слава Польше!" />
            <Massages messages="Слава Больцеровичу!" />
            <Massages messages="Слава Польскому Народу!" />
         </div>
      </div>
   )
}
export default Dialogs;