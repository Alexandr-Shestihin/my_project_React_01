import { combineReducers, createStore, applyMiddleware } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import siteBarReducer from "./siteBar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import loginReducer from "./login-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   siteBar: siteBarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   login: loginReducer,
});
//ВНИМАНИЕ! В APP ФИГНЯ!

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;