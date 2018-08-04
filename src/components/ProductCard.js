import React from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import Counter from './Counter';
import AddToCart from './AddToCart';

export default class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = { quantity: 1 };
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity(qty) {
    this.setState({
      quantity: qty
    });
  }

  dragStart(ev, product) {
    ev.dataTransfer.setData('selProduct', JSON.stringify({
      product,
      qty: this.state.quantity
    }));
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
        <Counter updateQuantity={this.updateQuantity} />
        <AddToCart product={product} qty={this.state.quantity} />
      </div>
    );
  }
}
