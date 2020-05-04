import * as serviceWorker from './serviceWorker'
import './index.css';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerenderAllTree = (state)=>{
ReactDOM.render(
  <BrowserRouter>
    <App state = {state} dispatch = {store.dispatch.bind(store)} store = {store} />
    </BrowserRouter>,
  document.getElementById('root')
);
}

rerenderAllTree(store.getState());

store.subscribe(()=>{
  let state = store.getState();
  rerenderAllTree(state);
});

serviceWorker.unregister();


