import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from '../serviceWorker';
import 'normalize.css/normalize.css';
import store from './store';
import './index.css';
import App from './App.jsx';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if ('production' === process.env.NODE_ENV) {
  serviceWorker.register();
} else {
  serviceWorker.unregister();
}
