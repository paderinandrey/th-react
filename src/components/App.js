import React from 'react';
import CatalogPage from './CatalogPage';
import Cart from './Cart';
import Menu from './Menu';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Cart />
        <CatalogPage />
      </div>
    );
  }
}
