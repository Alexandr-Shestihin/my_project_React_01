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

const App = () => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            {/* <For_zorax_css /> */}
            <Header />
            <Nav />
            <div className="app-wrapper-content">
               <Route path="/Dialogs" component={Dialogs} />
               <Route path="/profile" component={Profile} />
               <Route path="/news" component={News} />
               <Route path="/music" component={Music} />
               <Route path="/settings" component={Settings} />
               <Route path="/for_zorax_css" component={For_zorax_css} />
            </div>
         </div >
      </BrowserRouter>
   );
}

export default App;

