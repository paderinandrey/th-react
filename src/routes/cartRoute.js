import { cartPath } from '../helpers/routes';
import CartContainer from '../containers/CartContainer';

export default {
  name: 'Cart',
  exact: true,
  strict: true,
  path: cartPath(),
  component: CartContainer
};
