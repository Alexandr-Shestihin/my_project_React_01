import { usersAPI } from './../components/api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialeState = {
   profile: [],
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

      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         }
      }
      default: return state;
   }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const thunkProfile = (userId) => {
   return (dispatch) => {
      usersAPI.getProfile(userId).then(response => {
         dispatch(setUserProfile(response.data))
      })
   }
}

export default profileReducer;