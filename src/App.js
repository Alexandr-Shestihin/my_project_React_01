import './App.scss';
import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import For_zorax_css from './components/For_zorax_css/For_zorax_css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import LoginContainer from './components/login/loginContainer';

import store from './redux/redux-store'
import ForFormik from './components/componentForFormik/forFormik';
//убрать эту фигню!

const App = (props) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <HeaderContainer />
            <Nav siteBar={store.getState().siteBar} />

            <div className="app-wrapper-content">

               <Route path="/forFormik" render={() => <ForFormik />} />

               <Route path="/Dialogs" render={() => <DialogsContainer />} />

               <Route path='/profile/:userId?' render={() => <ProfileContainer />} />

               <Route path="/news" render={() => <News />} />
               <Route path="/music" render={() => <Music />} />
               <Route path="/settings" render={() => <Settings />} />
               <Route path="/for_zorax_css" render={() => <For_zorax_css />} />
               <Route path="/users" render={() => <UsersContainer />} />
               <Route path="/login" render={() => <LoginContainer />} />
            </div>
         </div >
      </BrowserRouter>
   );
}

export default App;

