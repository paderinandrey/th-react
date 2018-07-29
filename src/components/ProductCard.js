import React from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import Counter from './Counter';

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
        <TextBox>{product.title}</TextBox>
        <Price>{product.price}</Price>
        <Counter />
      </div>
    );
  }
}
