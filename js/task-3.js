const textInput = document.querySelector('input#name-input');
const textOutput = document.querySelector('span#name-output');

textInput.addEventListener('input', inputChange => {
  const inputValue = inputChange.currentTarget.value.trim();
  textOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
});
