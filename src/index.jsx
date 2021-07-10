import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <div className="bg-dark mt-0 pt-0 text-white">
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);
