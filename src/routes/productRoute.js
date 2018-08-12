import { productPath } from '../helpers/routes';
import ProductCard from '../components/ProductCard';

export default {
  name: 'Product Card',
  exact: true,
  strict: true,
  path: productPath(),
  component: ProductCard
};
