import React from 'react';
import RenderDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CartProvider } from './src/containers/CartContainer';
import IndexRoute from './src/routes/indexRoute';
import store from './src/store';

import { increment } from '~/src/actions/counter';

console.log("state: ", store.getState());

store.dispatch(increment(3));

console.log("state: ", store.getState());

RenderDOM.render(
  <Provider store={store}>
    <CartProvider>
      {IndexRoute()}
    </CartProvider>
  </Provider>,
  document.getElementById('app')
);
