import React from 'react';
import { NavLink } from 'react-router-dom';
import { rootPath, productsPath, cartPath, contactPath } from '../helpers/routes';

export default class Menu extends React.Component {
  render() {
    return (
      <nav>
        <NavLink to={rootPath()}>Home</NavLink>
        <NavLink to={productsPath()}>Products</NavLink>
        <NavLink to={cartPath()}>Cart</NavLink>
        <NavLink to={contactPath()}>Contact</NavLink>
      </nav>
    );
  }
}
