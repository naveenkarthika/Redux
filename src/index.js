import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';


let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);


serviceWorker.register();







/*
//Action -increment/decrement

const increment = () => {
  return {
    type:"INCREMENT"
  } 
}
const decrement = () => {
  return {
    type:"DECREMENT"
  }
}
//Reducer
let initialState = 0;
const counter = (state = initialState,action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
}

//Store - globally state
let store = createStore(counter);

//display it console
store.subscribe(() => console.log(store.getState()))

//dispatch

store.dispatch(increment())
store.dispatch(decrement())

*/