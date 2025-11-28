const input = document.querySelector('#controls input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.getElementById('boxes');

// Функція для створення випадкового кольору
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Створення елементів
function createBoxes(amount) {
  let size = 30; // Початковий розмір
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomColor();
    fragment.appendChild(box);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
}

// Очищення контейнера
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Обробка кнопок
renderBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount > 0) {
    createBoxes(amount);
  }
});

destroyBtn.addEventListener('click', destroyBoxes);