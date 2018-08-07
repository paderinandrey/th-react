import { contactPath } from '../helpers/routes';
import Contact from '../components/Contact';

export default {
  name: 'Contact',
  exact: true,
  strict: true,
  path: contactPath(),
  component: Contact
};
