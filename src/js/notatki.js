import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const name = "Bartek";
const age = "30";

const emptyParagraph = document.querySelector(".inner-section__text--js");
emptyParagraph.innerHTML = `W tym miejscu pojawia się paragraf wstawiony przez JS - jest widoczny w DOM, ale nie w kodzie źródłowym.`;

function calculate(myNumber) {
  console.log(`Jak napisałem wcześniej, mam lat: ${myNumber}`);
  return myNumber * 7;
}

const myResult = calculate(age);

console.log(`Gdy pomnożę razy 7 dostanę: ${myResult}`);
console.log(`Tyle nigdy nie dożyję :D`);

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(
  ".inner-section__heading--js",
  "JS - funkcje (tytuł wstawiony dzięki funkcji)."
);

console.log(`Dalsze działania:`);

const third = (anotherNumber) => {
  anotherNumber = anotherNumber + 3;
  return anotherNumber * 7;
};

const myResult2 = third(3);
console.log(`Wynik tego działania to: ${myResult2}`);

const calculate2 = (anotherNumber) => anotherNumber * 10;

const myResult3 = calculate2(3);
console.log(`Natomiast tego: ${myResult3}`);

const car = {
  type: "passenger car",
  mark: "Peugeot",
  model: "207",
  yearOfManufacture: 2005,
  navigation: (destination) => {
    console.log(`Going to: ${destination}`);
  },
  engine: 1.6,
  fuel: "oil",
};

console.log(car);
for (let myCar in car) {
  console.log(car[myCar]);
}

console.log(car["mark"]);
console.log(car.fuel);
console.log(car.navigation("Mielec"));

const myProperty = "mark";
const showMeProperty = (myProperty) => {
  console.log(`Mój samochód ma pojemność ${car[myProperty]}l.`);
};

showMeProperty("engine");

const hamburger = document.querySelector('.menu-button--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})

//change mode


let isLight = false;

const switchModes = document.querySelector('.change-mode__button--js');
switchModes.addEventListener('click', () => {
  if (isLight) {
    document.documentElement.style.setProperty('--mode-background', 'rgba(0, 0, 0, 0.6)');
    document.documentElement.style.setProperty('--mode-button', '#ffffff');
    document.documentElement.style.setProperty('--mode-button-label', 'black');
    document.documentElement.style.setProperty('--mode-heading', '#ffffff');
    document.documentElement.style.setProperty('--mode-text-color', '#ffffff');
    isLight = false
  }
  else {
    document.documentElement.style.setProperty('--mode-background', '#dddddd');
    document.documentElement.style.setProperty('--mode-button', '#d2bd80');
    document.documentElement.style.setProperty('--mode-button-label', 'black');
    document.documentElement.style.setProperty('--mode-heading', '#ffffff');
    document.documentElement.style.setProperty('--mode-text-color', 'black');
    isLight = true
  }
})
