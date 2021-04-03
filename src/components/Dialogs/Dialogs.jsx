import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Massages from './Massages/Massages';
import s from "./Dialogs.module.scss";

const Dialogs = (props) => {


   let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messagesElements = props.massages.map(m => <Massages messages={m.massage} />);
   return (
      <div className={s.dialogs}>
         <div>
            <div className={s.dialogs_items}>
               {dialogsElements}
            </div>
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
   )
}
export default Dialogs;