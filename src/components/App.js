import React from 'react';
import CatalogPage from './CatalogPage';
import Menu from './Menu';
import CartButton from './CartButton';

export default class App extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    history.listen((location, action) => {
      if (location.state && location.state.message) {
        alert(location.state.message);
      }
    });
  }

  render() {
    return (
      <div>
        <Menu />
        <CartButton />
        <CatalogPage />
      </div>
    );
  }
}
