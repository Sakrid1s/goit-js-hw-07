const formSubmit = document.querySelector('.login-form');

formSubmit.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = formSubmit.elements['email'].value.trim();
  const password = formSubmit.elements['password'].value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }
  const obj = {
    email,
    password,
  };
  console.log(obj);
  formSubmit.reset();
}
