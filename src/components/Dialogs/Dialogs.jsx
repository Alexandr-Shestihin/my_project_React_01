import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Massages from './Massages/Massages';
import s from "./Dialogs.module.scss";
import { addMassageActionCreator } from '../../redux/dialogs-reducer';
import { updateNewMassageTextActionCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
   let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

   let messagesElements = props.dialogsPage.massages.map(m => <Massages messages={m.massage} />);

   let addMassage = () => {
      props.dispatch(addMassageActionCreator());
   }
   let onMassageChange = (e) => {
      let text = e.target.value;
      props.dispatch(updateNewMassageTextActionCreator(text));
   }
   return (
      <div className={s.dialogs}>
         <div>
            <div className={s.dialogs_items}>
               {dialogsElements}
            </div>
         </div>
         <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
               <textarea
                  value={props.newMassageText}
                  onChange={onMassageChange}
                  placeholder="Enter your massage"
               />
            </div>
            <div>
               <button onClick={addMassage}>Отправить</button>
            </div>
         </div>
      </div>
   )
}
export default Dialogs;