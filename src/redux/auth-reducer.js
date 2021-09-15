import { usersAPI } from './../components/api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialeState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
}

const authReducer = (state = initialeState, action) => {
   switch (action.type) {
      case SET_AUTH_USER_DATA:
         return {
            ...state,
            ...action.payload,
            isAuth: true,
         };

      default: return state;
   }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } });

export const thunkAuth = () => {
   return (dispatch) => {
      usersAPI.auth().then(response => {
         if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true))
         }
      })
   }
}

export const thunkLogin = (email, password, rememberMe) => {
   return (dispatch) => {
      usersAPI.login(email, password, rememberMe).then(response => {
         if (response.data.resultCode === 0) {
            dispatch(thunkAuth())
         }
      })
   }
}

export const thunkLogout = () => {
   return (dispatch) => {
      usersAPI.logout().then(response => {
         if (response.data.resultCode === 0) {
            dispatch(thunkAuth(null, null, null, false))
         }
      })
   }
}

export default authReducer;