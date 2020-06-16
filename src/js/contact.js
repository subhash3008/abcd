import elements from './elements';
import { _api } from './services/api';
import URLS from './services/urls';
import { handleToasted } from './services/apiHandler';

const EMAIL_VALIDATION_REGEX = /\S+@\S+\.\S+/;

const clearContactForm = () => {
  const marginClass = 'form_el_margin';
  elements.contactForm.fullName.value = '';
  elements.contactForm.email.value = '';
  elements.contactForm.message.value = '';
  elements.contactForm.errors.fullName.innerText = '';
  elements.contactForm.errors.email.innerText = '';
  elements.contactForm.errors.message.innerText = '';

  elements.contactForm.fullName.classList.add(marginClass);
  elements.contactForm.email.classList.add(marginClass);
  elements.contactForm.message.classList.add(marginClass);
  elements.contactForm.errors.fullName.classList.remove(marginClass);
  elements.contactForm.errors.email.classList.remove(marginClass);
  elements.contactForm.errors.message.classList.remove(marginClass);
  elements.contactForm.errors.fullName.classList.add('hide');
  elements.contactForm.errors.email.classList.add('hide');
  elements.contactForm.errors.message.classList.add('hide');
}

const requestContact = async (form) => {
  const url = URLS.baseUrl + URLS.contactUs;
  try {
    const response = await _api.post(url, form);
    if (response.status === 200) {
      return true;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
}

const submitForm = async (e) => {
  e.preventDefault();
  if (elements.contactForm.fullName && elements.contactForm.email && elements.contactForm.message) {
    const form = {
      fullName: elements.contactForm.fullName.value,
      email: elements.contactForm.email.value,
      message: elements.contactForm.message.value
    };
    const error = validateForm(form);
    if (!error) {
      const isSuccessFull = await requestContact({ ...form });
      if (isSuccessFull) {
        handleToasted('success', 'We heard you!! We will get back to you as soon as possible');
        clearContactForm();
      } else {
        handleToasted('error', 'Oops!! Something went wrong. Please try to contact us in some time');
      }
    } else {
      const marginClass = 'form_el_margin';
      if (error && error.fullName && elements.contactForm.errors.fullName) {
        elements.contactForm.errors.fullName.innerText = error.fullName;
        elements.contactForm.fullName.classList.remove(marginClass);
        elements.contactForm.errors.fullName.classList.add(marginClass, 'show');
      }
      if (error && error.email && elements.contactForm.errors.email) {
        elements.contactForm.errors.email.innerText = error.email;
        elements.contactForm.email.classList.remove(marginClass);
        elements.contactForm.errors.email.classList.add(marginClass, 'show');
      }
      if (error && error.message && elements.contactForm.errors.message) {
        elements.contactForm.errors.message.innerText = error.message;
        elements.contactForm.message.classList.remove(marginClass);
        elements.contactForm.errors.message.classList.add(marginClass, 'show');
      }
    }
  }
}

const validateForm = (formObj) => {
  const error = {};
  if (!formObj.fullName) {
    error['fullName'] = 'Name is required';
  }
  if (!formObj.email) {
    error['email'] = 'Email is required';
  }
  if (formObj.email && !EMAIL_VALIDATION_REGEX.test(formObj.email)) {
    error['email'] = 'Invalid Email';
  }
  if (!formObj.message) {
    error['message'] = 'Message is required';
  }
  return !Object.keys(error).length ? null : error;
}

export const linkOnSubmit = () => {
  if (elements.contactSubmitCta) {
    elements.contactSubmitCta.addEventListener('click', submitForm);
  }
}