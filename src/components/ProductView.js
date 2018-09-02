import React from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToCartForm from './AddToCartForm';
import Gallery from './Gallery';

export default class ProductView extends React.Component {
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
        <AddToCartForm product={product} />
        <Gallery photoUrls={product.photos} />
      </div>
    );
  }
}
