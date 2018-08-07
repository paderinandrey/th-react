import { productsPath } from '../helpers/routes';
import CatalogPage from '../components/CatalogPage';

export default {
  name: 'Products',
  exact: true,
  strict: true,
  path: productsPath(),
  component: CatalogPage
};
