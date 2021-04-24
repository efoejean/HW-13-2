const p = document.createElement('p');
document.body.appendChild(p);
const root = document.querySelector(':root');
const minFormNum = document.querySelector('#min-num');
const maxFormNum = document.querySelector('#max-num');
const color = document.querySelector('input[type="color"]');

color.addEventListener('input', event => {
  root.style.setProperty('--color', `${event.target.value}`);
});
minFormNum.addEventListener('submit', event => {
  event.preventDefault();
  const newMin = event.target.elements[0].value;
  console.log(newMin);
});

maxFormNum.addEventListener('submit', event => {
  event.preventDefault();
  const newMax = event.target.elements[0].value;
  console.log(newMax);
});
