import '../styles/index.scss';

import * as footer from './footer';
import * as header from './header';
import * as contact from './contact';
import * as newsLetter from './newsletter';


const init = () => {
  header.linkLogoToHome();
  contact.linkOnSubmit();
  newsLetter.linkOnSubmit();
  footer.renderYear();
}

init();
