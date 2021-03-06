import React from 'react';
import Dialogs from './Dialogs';
import { addMassageActionCreator } from '../../redux/dialogs-reducer';
import { updateNewMassageTextActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
      newMassageText: state.dialogsPage.newMassageText,
      isAuth: state.auth.isAuth,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMassageText: (text) => {
         dispatch(updateNewMassageTextActionCreator(text))
      },
      onAddMassage: () => {
         dispatch(addMassageActionCreator())
      },
   }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
