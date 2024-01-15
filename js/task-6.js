function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('div#boxes');
const userInput = document.querySelector('input');

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
    size += 10;
  }
}

createBtn.addEventListener('click', () => {
  const amount = userInput.value;
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    userInput.value = '';
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}
