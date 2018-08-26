import React from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToCart from './AddToCart';
import Gallery from './Gallery';
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

    const imageAttrs = {
      alt: product.title,
      weight: '128px',
      height: '128px',
    };

    return (
      <div>
        <Image src={product.imageUrl} {...imageAttrs} />
        <TextBox>{product.title}</TextBox>
        <Price>{product.price}</Price>
        <AddToCart product={product} />
        <Gallery photoUrls={product.photos} />
      </div>
    );
  }
}
