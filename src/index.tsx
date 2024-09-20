// This file has to be left untouched

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import createStore from './redux/store';
import { receiveDomains } from './redux/domains/actions';

const store = createStore();

store.dispatch(receiveDomains(['US_OK-WOK', 'FR_NK-WOL', 'FR_OK-NPP', 'EN_NK-NRP', 'EN_BL-WOL']));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// ReatDom.render is deprecated, hence the warning in the console
// We should use createRoot instead
// const container = document.getElementById('app');
// const root = createRoot(container!);
// Or inline
// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );

// But file is marked as forbidden to modify!
