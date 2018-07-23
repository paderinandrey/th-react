import React from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

export default class ProductCart extends React.Component {
  render() {
    const { product } = this.props;

    const imageAttrs = {
      alt: product.title,
      weight: '128px',
      height: '128px',
    };

    return (
      <div>
        <Image src={product.imageUrl} {...imageAttrs} />
        <TextBox value={product.title} />
        <Price value={product.price} />
      </div>
    );
  }
}
