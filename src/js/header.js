import elements from './elements';

const scrollToTop = () => {
  window.scrollTo(0, 0);
}

export const linkLogoToHome = () => {
  if (elements.headerLogo) {
    elements.headerLogo.addEventListener('click', scrollToTop);
  }
}
