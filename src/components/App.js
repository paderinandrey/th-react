import React from 'react';
import CatalogContainer from '~/src/containers/CatalogContainer';
import CartButtonContainer from '~/src/containers/CartButtonContainer';
import Menu from './Menu';

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
        <CartButtonContainer />
        <CatalogContainer />
      </div>
    );
  }
}
