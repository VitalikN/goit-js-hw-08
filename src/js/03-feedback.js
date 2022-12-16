import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
onInitform();

const formFilters = {};

function onFormInput(evt) {
  formFilters[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formFilters));
}
function onFormSubmit(evt) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onInitform() {
  const feedbackForm = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form  textarea');
  if (feedbackForm) {
    // feedbackForm = JSON.parse(feedbackForm);
    // Object.entries(feedbackForm).forEach(([name, value]) => {
    //   form.elements[name] = value;
    // });

    email.value = feedbackForm.email;
    message.value = feedbackForm.message;
  }
}
