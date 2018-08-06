import React from 'react';

const CartContext = React.createContext();

class CartProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      totalItems: 0,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(selectedProduct, qty = 1) {
    let cartItems = this.state.cart;
    let productID = selectedProduct.id;
    let isFound = cartItems.some(item => item.id === productID);

    if (isFound) {
      let index = cartItems.findIndex(x => x.id === productID);
      cartItems[index].quantity += Number(qty);
      this.updateState(cartItems);
    }
    else {
      selectedProduct.quantity = Number(qty);
      this.updateState([...this.state.cart, selectedProduct]);
    }
  }

  updateState(cart) {
    this.setState({ cart });
  }

  render() {
    return (
      <CartContext.Provider value={{
          cart: this.state.cart,
          addToCart: this.addToCart
        }}>
        { this.props.children }
      </CartContext.Provider>
    );
  }
}

const CartConsumer = CartContext.Consumer;

export { CartProvider, CartConsumer };