const ADD_MASSAGE = 'ADD-MASSAGE';
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';

let initialeState = {
   dialogs: [
      { id: 0, name: 'Чёрный властелин' },
      { id: 1, name: 'Даун' },
      { id: 2, name: 'Шкальник' },
      { id: 3, name: 'Ян' },
      { id: 4, name: 'Александр' },
      { id: 5, name: 'Россеянская болельщица' },
      { id: 6, name: 'Рогозин' },
      { id: 7, name: 'Белый властелин' },
      { id: 8, name: 'Иван' },
   ],
   massages: [
      { id: 1, massage: "Слава Польше!" },
      { id: 2, massage: "Хочу в Польшу" },
      { id: 3, massage: "1234" },
   ],
   newMassageText: '',
}

const dialogsReducer = (state = initialeState, action) => {
   switch (action.type) {
      case ADD_MASSAGE:
         let newMassage = {
            id: state.massages.length + 1,
            massage: state.newMassageText,
         }
         return {
            ...state,
            newMassageText: '',
            massages: [...state.massages, newMassage]
         };

      case UPDATE_NEW_MASSAGE_TEXT:
         return {
            ...state,
            newMassageText: action.newText
         };

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