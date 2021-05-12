"use script";
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const number = getRandomNumber(100);
const numberInput = document.querySelector(".js-number");
const numberInputValue = numberInput.value;
const help = document.querySelector(".js-help");
const button = document.querySelector(".js-button");
const numberTry = document.querySelector(".js-count");

function handelplay() {
  if (numberInputValue > number) {
    return (help.value = "Demasiado alto");
  } else if (numberInputValue < number) {
    return (help.value = "Demasiado bajo");
  } else if (numberInputValue === number) {
    return (help.value = "HAS GANADO");
  }
}

button.addEventListener("click", handelplay);
