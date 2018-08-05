import React from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToCart from './AddToCart';

export default class ProductCard extends React.Component {
  dragStart(ev, product) {
    ev.dataTransfer.setData('selectedProduct', JSON.stringify({ product }));
  }

  render() {
    const { product } = this.props;
    const imageAttrs = {
      alt: product.title,
      weight: '128px',
      height: '128px',
    };
    return (
      <div draggable onDragStart={(e) => this.dragStart(e, product)}>
        <Image src={product.imageUrl} {...imageAttrs} />
        <TextBox>{product.title}</TextBox>
        <Price>{product.price}</Price>
        <AddToCart product={product} />
      </div>
    );
  }
}
