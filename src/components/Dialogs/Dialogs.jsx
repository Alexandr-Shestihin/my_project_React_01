import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Massages from './Massages/Massages';
import s from "./Dialogs.module.scss";

const Dialogs = (props) => {
   let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

   let messagesElements = props.dialogsPage.massages.map(m => <Massages messages={m.massage} />);

   let newMassage = React.createRef();

   let addMassage = () => {
      props.dispatch({ type: 'ADD-MASSAGE' });
   }
   let onMassageChange = () => {
      let text = newMassage.current.value;
      props.dispatch({ type: 'UPDATE-NEW-MASSAGE-TEXT', newText: text });
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
            <textarea
               ref={newMassage}
               value={props.newMassageText}
               onChange={onMassageChange}
            />
            <button onClick={addMassage}>Отправить</button>
         </div>
      </div>
   )
}
export default Dialogs;