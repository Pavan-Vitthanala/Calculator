let calculation = localStorage.getItem('calculation') || '';

displayIchey();

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  displayIchey(),
  localStorage.setItem('calculation', calculation);
}

displayIchey();

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function displayIchey() {
  document.querySelector('.js-display').innerHTML = calculation;
}