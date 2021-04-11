import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { addPost } from './redux/state';

export let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App state1={state} addPost={addPost} />
      </React.StrictMode>,
      document.getElementById('root')
   );
}