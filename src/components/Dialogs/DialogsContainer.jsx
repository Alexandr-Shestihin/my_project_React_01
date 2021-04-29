import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import { addMassageActionCreator } from '../../redux/dialogs-reducer';
import { updateNewMassageTextActionCreator } from '../../redux/dialogs-reducer';


const DialogsContainer = (props) => {
   let addMassage = () => {
      props.store.dispatch(addMassageActionCreator());
   }
   let onMassageChange = (text) => {
      props.store.dispatch(updateNewMassageTextActionCreator(text));
   }
   return (
      <Dialogs
         updateNewMassageText={onMassageChange}
         onAddMassage={addMassage}
         dialogsPage={props.store.getState().dialogsPage}
      />
   )
}
export default DialogsContainer;