import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import For_zorax_css from './components/For_zorax_css/For_zorax_css';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header />
            <Nav siteBar={props.state.siteBar} />

            <div className="app-wrapper-content">

               <Route exact path="/Dialogs" render={() => <Dialogs
                  dialogsPage={props.state.dialogsPage}
                  newMassageText={props.state.dialogsPage.newMassageText}
                  dispatch={props.dispatch}
               />} />

               <Route path="/profile" render={() => <Profile
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}
               />} />

               <Route path="/news" render={() => <News />} />
               <Route path="/music" render={() => <Music />} />
               <Route path="/settings" render={() => <Settings />} />
               <Route path="/for_zorax_css" render={() => <For_zorax_css />} />
            </div>
         </div >
      </BrowserRouter>
   );
}

export default App;

