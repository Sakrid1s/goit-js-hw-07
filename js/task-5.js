function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.body;
const colorSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', handleChangeColor);

function handleChangeColor(event) {
  const newColor = getRandomHexColor();
  colorSpan.textContent = newColor;
  bodyElem.style.backgroundColor = newColor;
}
