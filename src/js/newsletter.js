import elements from './elements';
import { _api } from './services/api';
import URLS from './services/urls';
import { handleToasted } from './services/apiHandler';

const EMAIL_VALIDATION_REGEX = /\S+@\S+\.\S+/;

const clearSubscribeForm = () => {
  const marginClass = 'form_el_margin';
  elements.newsletterForm.fullName.value = '';
  elements.newsletterForm.email.value = '';
  elements.newsletterForm.errors.fullName.innerText = '';
  elements.newsletterForm.errors.email.innerText = '';

  elements.newsletterForm.fullName.classList.add(marginClass);
  elements.newsletterForm.email.classList.add(marginClass);
  elements.newsletterForm.errors.fullName.classList.remove(marginClass);
  elements.newsletterForm.errors.email.classList.remove(marginClass);
  elements.newsletterForm.errors.fullName.classList.add('hide');
  elements.newsletterForm.errors.email.classList.add('hide');
}

const requestSubscribe = async (form) => {
  const url = URLS.baseUrl + URLS.subscribeNewsLetter;
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
  if (elements.newsletterForm.fullName && elements.newsletterForm.email) {
    const form = {
      fullName: elements.newsletterForm.fullName.value,
      email: elements.newsletterForm.email.value
    };
    const error = validateForm(form);
    if (!error) {
      const isSuccessFull = await requestSubscribe({ ...form });
      if (isSuccessFull) {
        handleToasted('success', 'You are now subscribed to Nestico.');
        clearSubscribeForm();
      } else {
        handleToasted('error', 'Oops!! Something went wrong. Please try to subscribe in some time.');
      }
    } else {
      const marginClass = 'form_el_margin';
      if (error && error.fullName && elements.newsletterForm.errors.fullName) {
        elements.newsletterForm.errors.fullName.innerText = error.fullName;
        elements.newsletterForm.fullName.classList.remove(marginClass);
        elements.newsletterForm.errors.fullName.classList.add(marginClass, 'show');
      }
      if (error && error.email && elements.newsletterForm.errors.email) {
        elements.newsletterForm.errors.email.innerText = error.email;
        elements.newsletterForm.email.classList.remove(marginClass);
        elements.newsletterForm.errors.email.classList.add(marginClass, 'show');
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
  return !Object.keys(error).length ? null : error;
}

export const linkOnSubmit = () => {
  if (elements.newsLetterSubscribeCta) {
    elements.newsLetterSubscribeCta.addEventListener('click', submitForm);
  }
}