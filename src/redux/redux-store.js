import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import siteBarReducer from "./siteBar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   siteBar: siteBarReducer,
   usersPage: usersReducer,
});
//ВНИМАНИЕ! В APP ПАРАША!

let store = createStore(reducers);

window.store = store;

export default store;