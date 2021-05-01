import React from 'react';
import Dialogs from './Dialogs';
import { addMassageActionCreator } from '../../redux/dialogs-reducer';
import { updateNewMassageTextActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
      newMassageText: state.dialogsPage.newMassageText,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMassageText: () => {
         dispatch(addMassageActionCreator())
      },
      onAddMassage: (text) => {
         dispatch(updateNewMassageTextActionCreator(text))
      },
   }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;