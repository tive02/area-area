import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles.css';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider state={state}>
    <App />
  </Provider>
  , document.getElementById('root')
);