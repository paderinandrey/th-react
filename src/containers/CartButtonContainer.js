import { connect } from 'react-redux';
import { addToCart } from '~/src/actions/CartActions';
import CartButton from '~/src/components/CartButton';

const mapStateToProps = (state) => {
  const { totalQty, totalSum } = state.cart;
  return ({
    totalQty,
    totalSum,
  });
};

const mapDispatchToProps = dispatch => ({
  handleDrop(ev) {
    const { product } = JSON.parse(ev.dataTransfer.getData('selectedProduct'));
    dispatch(addToCart(product));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartButton);
