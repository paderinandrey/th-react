import { connect } from 'react-redux';

import Cart from '~/src/components/Cart';

const mapStateToProps = (state) => {
  return ({ ...state.cart });
};

export default connect(mapStateToProps)(Cart);
