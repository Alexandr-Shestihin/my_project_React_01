const ADD_MASSAGE = 'ADD-MASSAGE';
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';

const dialogsReducer = (state, action) => {
   switch (action.type) {
      case ADD_MASSAGE:
         let newMassage = {
            id: state.massages.length + 1,
            massage: state.newMassageText,
         }
         state.massages.push(newMassage);
         state.newMassageText = '';
         return state;

      case UPDATE_NEW_MASSAGE_TEXT:
         state.newMassageText = action.newText;
         return state;

      default:
         return state;
   }
}
export const addMassageActionCreator = () => {
   return {
      type: ADD_MASSAGE
   }
}
export const updateNewMassageTextActionCreator = (text) => {
   return {
      type: 'UPDATE-NEW-MASSAGE-TEXT', newText: text,
   }
}
export default dialogsReducer;