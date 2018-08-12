import React from 'react';
import RenderDOM from 'react-dom';
import { CartProvider } from './src/containers/CartContainer';
import IndexRoute from './src/routes/indexRoute';

RenderDOM.render(
  <CartProvider>
    {IndexRoute()}
  </CartProvider>,
  document.getElementById('app')
);
