import elements from './elements';

export const renderYear = () => {
  if (elements.footerYear) {
    elements.footerYear.innerText = new Date().getFullYear();
  }
}
