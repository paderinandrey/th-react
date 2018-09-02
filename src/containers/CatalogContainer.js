import React from 'react';
import { connect } from 'react-redux';
import Catalog from '~/src/components/Catalog';
import { fetchProducts } from '~/src/actions/ProductsActions';
import { addToCart } from '~/src/actions/CartActions';

class CatalogContainer extends React.Component {
  componentDidMount() {
    fetchProducts();
  }

  render() {
    const { catalog, addToCart } = this.props;
    return <Catalog { ...catalog } addToCart = { addToCart }/>;
  }
}

const mapStateToProps = store => {
  return {
    catalog: store.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: dispatch(fetchProducts()),
    addToCart(product, quantity) {
      dispatch(addToCart(product, quantity));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatalogContainer);
