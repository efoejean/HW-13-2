const p = document.createElement('p');
document.body.appendChild(p);
const minFormNum = document.querySelector('#min-num');
const maxFormNum = document.querySelector('#max-num');

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
