"use script";
const numberInput = document.querySelector(".js-number");
const acumulator = document.querySelector(".js-count");
const help = document.querySelector(".js-help");
const button = document.querySelector(".js-button");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const number = getRandomNumber(100);
let cont = 0;
function count() {
  cont++;
  acumulator.value = `Número de intentos: ${cont}`;
}
function handelclick() {
  play();
  count();
}

function play() {
  const numberInputValue = numberInput.value;
  if (numberInput.value < 1 || help.value > 100) {
    return (help.value = "El número debe estar entre 1 y 100");
  }
  if (numberInputValue > number) {
    return (help.value = "Demasiado alto");
  } else if (numberInputValue < number) {
    return (help.value = "Demasiado bajo");
  } else if (numberInputValue === number) {
    return (help.value = "HAS GANADO");
  }
}

button.addEventListener("click", handelclick);
