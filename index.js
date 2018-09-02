import React from 'react';
import RenderDOM from 'react-dom';
import { Provider } from 'react-redux';
import IndexRoute from './src/routes/indexRoute';
import store from './src/store';

RenderDOM.render(
  <Provider store={store}>
    {IndexRoute()}
  </Provider>,
  document.getElementById('app')
);
