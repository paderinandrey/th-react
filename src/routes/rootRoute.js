import { rootPath } from '../helpers/routes';
import App from '../components/App';

export default {
  name: 'root',
  exact: true,
  strict: true,
  path: rootPath(),
  component: App
};
