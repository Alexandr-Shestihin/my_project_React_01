import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Massages from './Massages/Massages';
import { Redirect } from 'react-router-dom';
import s from "./Dialogs.module.scss";

const Dialogs = (props) => {

   let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

   let messagesElements = props.dialogsPage.massages.map(m => <Massages messages={m.massage} key={m.id} />);

   let addMassage = () => {
      props.onAddMassage();
   }
   let onMassageChange = (e) => {
      let text = e.target.value;
      props.updateNewMassageText(text);
   }

   if (!props.isAuth) return <Redirect to={"/login"} />
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