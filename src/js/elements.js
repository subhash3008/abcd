const elements = {
    headerLogo: document.querySelector('.js-header-logo'),
    footerYear: document.querySelector('.js-footer-year'),
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
    contactSubmitCta: document.querySelector('.js-contact-btn')
};

export default elements;
