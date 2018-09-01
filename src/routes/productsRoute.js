import { productsPath } from '../helpers/routes';
import CatalogContainer from '../containers/CatalogContainer';

export default {
  name: 'Products',
  exact: true,
  strict: true,
  path: productsPath(),
  component: CatalogContainer
};
