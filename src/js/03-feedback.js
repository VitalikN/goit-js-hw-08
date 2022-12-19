import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form  textarea');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
onInitform();

let feedbackFormInitial = {
  email: '',
  message: '',
};

if (!localStorage.getItem('feedback-form-state')) {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormInitial)
  );
}
email.required = 'true';
message.required = 'true';

function onFormInput() {
  feedbackFormInitial.email = email.value;
  feedbackFormInitial.message = message.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormInitial)
  );
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  feedbackFormInitial.email = '';
  feedbackFormInitial.message = '';
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormInitial)
  );

  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onInitform() {
  const feedbackForm = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (feedbackForm) {
    email.value = feedbackForm.email;
    message.value = feedbackForm.message;
  }
}
