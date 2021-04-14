import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Massages from './Massages/Massages';
import s from "./Dialogs.module.scss";

const Dialogs = (props) => {
   let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

   let messagesElements = props.dialogsPage.massages.map(m => <Massages messages={m.massage} />);

   let newMassage = React.createRef();

   let addMassage = () => {
      alert(newMassage.current.value);
      newMassage.current.value = '';
   }
   return (
      <div className={s.dialogs}>
         <div>
            <div className={s.dialogs_items}>
               {dialogsElements}
            </div>
         </div>
         <div className={s.messages}>
            {messagesElements}
            <textarea ref={newMassage}></textarea>
            <button onClick={addMassage}>Отправить</button>
         </div>
      </div>
   )
}
export default Dialogs;