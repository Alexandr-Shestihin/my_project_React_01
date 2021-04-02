import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Massages from './Massages/Massages';
import s from "./Dialogs.module.scss";

const Dialogs = () => {
   let dialogs = [
      { id: 0, name: 'Чёрный властелин' },
      { id: 1, name: 'Даун' },
      { id: 2, name: 'Шкальник' },
      { id: 3, name: 'Ян' },
      { id: 4, name: 'Александр' },
      { id: 5, name: 'Россеянская болельщица' },
      { id: 6, name: 'Рогозин' },
      { id: 7, name: 'Белый властелин' },
      { id: 8, name: 'Иван' },
   ]
   let massages = [
      { id: 1, massage: "Слава Польше!" },
      { id: 2, massage: "Слава Больцеровичу!" },
      { id: 3, massage: "Слава Польскому Народу!" },
   ]
   let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messagesElements = massages.map(m => <Massages messages={m.massage} />);
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