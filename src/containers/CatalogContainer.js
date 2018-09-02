import React from 'react';
import { connect } from 'react-redux';
import Catalog from '~/src/components/Catalog';
import { fetchProducts } from '~/src/actions/ProductsActions';

class CatalogContainer extends React.Component {
  componentDidMount() {
    fetchProducts();
  }

  render() {
    const { catalog } = this.props;
    return <Catalog { ...catalog } />;
  }
}

const mapStateToProps = store => {
  return {
    catalog: store.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: dispatch(fetchProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogContainer);
