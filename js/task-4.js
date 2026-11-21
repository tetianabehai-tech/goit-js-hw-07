const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const userData = {};

  for (const [key, value] of formData.entries()) {
    userData[key] = value.trim();
  }

  if (Object.values(userData).some(value => value === '')) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(userData);
  form.reset();
});
