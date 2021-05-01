import React from 'react';
import Dialogs from './Dialogs';
import { addMassageActionCreator } from '../../redux/dialogs-reducer';
import { updateNewMassageTextActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';


const DialogsContainer = (props) => {
   return (
      <StoreContext.Consumer>{
         (store) => {
            let addMassage = () => {
               store.dispatch(addMassageActionCreator());
            }

            let onMassageChange = (text) => {
               store.dispatch(updateNewMassageTextActionCreator(text));
            }
            return <Dialogs
               updateNewMassageText={onMassageChange}
               onAddMassage={addMassage}
               dialogsPage={store.getState().dialogsPage}
               newMassageText={store.getState().dialogsPage.newMassageText}
            />
         }
      }
      </StoreContext.Consumer>
   )
}
export default DialogsContainer;