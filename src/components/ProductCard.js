import React from 'react';
import ProductView from './ProductView';
import { loadProduct } from '../services/contentfulClient';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      isLoading: true
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    loadProduct(id).then((product) => {
      this.setState({ product, isLoading: false });
    });
  }

  render() {
    const { isLoading, product } = this.state;
    if (isLoading) { return null }
    return <ProductView product={product} />;
  }
}
