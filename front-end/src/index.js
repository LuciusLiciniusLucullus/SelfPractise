import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './components/reducer/rootReducer'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

