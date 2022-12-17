import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

const formFilters = {};

function onFormInput(evt) {
  formFilters[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formFilters));
}
function onFormSubmit(evt) {
  onInitform();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onInitform() {
  const feedbackForm = JSON.parse(localStorage.getItem('feedback-form-state'));
  let email = document.querySelector('.feedback-form input');
  let message = document.querySelector('.feedback-form  textarea');
  if (!localStorage.getItem('feedback-form-state')) {
    (email = ''), (message = '');
  }
  if (feedbackForm) {
    email.value = feedbackForm.email;
    message.value = feedbackForm.message;
  }
}
