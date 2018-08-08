import React from 'react';
import CatalogPage from './CatalogPage';
import Cart from './Cart';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Cart />
        <CatalogPage />
      </div>
    );
  }
}
