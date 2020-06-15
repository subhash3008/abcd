import '../styles/index.scss';

import * as footer from './footer';
import * as header from './header';
import * as contact from './contact';


const init = () => {
  header.linkLogoToHome();
  contact.linkOnSubmit();
  footer.renderYear();
}

init();
