import elements from './elements';

export const linkLogoToHome = () => {
  if (elements.companyLogo) {
    [...elements.companyLogo].forEach(e => e.addEventListener('click', () => window.scrollTo(0, 0)));
  }
}
