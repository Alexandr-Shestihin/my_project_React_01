import { profileAPI, usersAPI } from './../components/api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialeState = {
   profile: [],
   posts: [
      { id: 1, massage: "Мой первый пост", likes: 150, },
   ],
   newPostText: '',
   status: '',
}

const profileReducer = (state = initialeState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: state.posts.length + 1,
            massage: action.newText,
            likes: 50,
         }
         return {
            ...state,
            newPostText: '',
            posts: [...state.posts, newPost],
         };
      }

      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         }
      }

      case SET_STATUS:
         return {
            ...state,
            status: action.status,
         }
      default: return state;
   }

}

export const addPostActionCreator = (text) => ({ type: ADD_POST, newText: text })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const thunkProfile = (userId) => {
   return (dispatch) => {
      usersAPI.getProfile(userId).then(response => {
         dispatch(setUserProfile(response.data))
      })
   }
}
export const thunkUserStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getStatus(userId).then(response => {
         dispatch(setStatus(response.data))
      })
   }
}
export const thunkUpdateStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(status).then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
         }
      })
   }
}

export default profileReducer;