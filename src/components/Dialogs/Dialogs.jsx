import React from 'react';
import s from "./Dialogs.module.scss";

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div>
            <div className={s.dialogs_items}>
               <div className={s.dialog + " " + s.active}>
                  Чёрный властелин
               </div>
               <div className={s.dialog}>
                  Ян
               </div>
               <div className={s.dialog}>
                  Александр
               </div>
               <div className={s.dialog}>
                  Даун
               </div>
               <div className={s.dialog}>
                  Шкальник
               </div>
            </div>
         </div>
         <div className={s.messages}>
            <div className="message">Hi Gitler!</div>
            <div className="message">Sieg Hill!</div>
            <div className="message">SS!</div>
         </div>
      </div>
   )
}
export default Dialogs;