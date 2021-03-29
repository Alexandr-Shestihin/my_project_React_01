import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Dialogs.module.scss";

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div>
            <div className={s.dialogs_items}>
               <div >
                  <NavLink to="/Dialogs/0" className={s.dialog} activeClassName={s.active}>Чёрный властелин</NavLink>
               </div>
               <div >
                  <NavLink to="/Dialogs/3" className={s.dialog} activeClassName={s.active}>Ян</NavLink>
               </div>
               <div>
                  <NavLink to="/Dialogs/4" className={s.dialog} activeClassName={s.active}>Александр</NavLink>
               </div>
               <div>
                  <NavLink to="/Dialogs/7" className={s.dialog} activeClassName={s.active}>Белый властелин</NavLink>
               </div>
               <div>
                  <NavLink to="/Dialogs/8" className={s.dialog} activeClassName={s.active}>Иван</NavLink>
               </div>
            </div>
         </div>
         <div className={s.messages}>
            <div className="message">Слава Польше!</div>
            <div className="message">Слава Больцеровичу!</div>
            <div className="message">Слава Польскому Народу!</div>
         </div>
      </div>
   )
}
export default Dialogs;