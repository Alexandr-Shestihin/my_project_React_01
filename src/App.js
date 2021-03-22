import './App.scss';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';
import For_zorax_css from './components/For_zorax_css';

const App = () => {
   return (
      <div className="app-wrapper">
         <For_zorax_css />
         {/* <Header />
         <Nav />
         <Profile /> */}
      </div >
   );
}

export default App;

