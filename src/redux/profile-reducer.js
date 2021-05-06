const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialeState = {
   posts: [
      { id: 1, massage: "Мой первый пост", likes: 150, },
   ],
   newPostText: '',
}

const profileReducer = (state = initialeState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: state.posts.length + 1,
            massage: state.newPostText,
            likes: 50,
         }
         return {
            ...state,
            newPostText: '',
            posts: [...state.posts, newPost],
         };
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText,
         };
      }
      default: return state;
   }

}

export const addPostActionCreator = () => {
   return {
      type: ADD_POST
   }
}
export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
}
export default profileReducer;