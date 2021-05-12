"use script";
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const numberInput = document.querySelector(".js-number");
const button = document.querySelector(".js-button");
const help = document.querySelector(".js-help");
const numberTry = document.querySelector("js-count");
//const userNumber =

const number = getRandomNumber(100);

console.log(number);

//  button.addEventListener ("click", handelfunction)
