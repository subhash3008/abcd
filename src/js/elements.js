const elements = {
  companyLogo: document.querySelectorAll('.js-company-logo'),
  footerYear: document.querySelector('.js-footer-year'),
  // contact us form
  contactForm: {
    fullName: document.querySelector('.js-contact-fullName'),
    email: document.querySelector('.js-contact-email'),
    message: document.querySelector('.js-contact-message'),
    errors: {
      fullName: document.querySelector('.js-contact-fullName-error'),
      email: document.querySelector('.js-contact-email-error'),
      message: document.querySelector('.js-contact-message-error'),
    }
  },
  contactSubmitCta: document.querySelector('.js-contact-btn'),
  // newsletter subscribe form
  newsletterForm: {
    fullName: document.querySelector('.js-newsletter-fullName'),
    email: document.querySelector('.js-newsletter-email'),
    errors: {
      fullName: document.querySelector('.js-newsletter-fullName-error'),
      email: document.querySelector('.js-newsletter-email-error'),
    }
  },
  newsLetterSubscribeCta: document.querySelector('.js-newsletter-btn')

};

export default elements;
