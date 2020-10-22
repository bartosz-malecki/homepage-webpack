import '../scss/main.scss';

import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const name = "Bartek";
const age = "30";

function greet(age, name) {
  console.log(`Witaj na mojej stronie testowej, mam na imię ${name} i mam ${age} lat.`);
}

greet(`30`, `Bartek`);


console.log("Zaczynam naukę więc proszę o wyrozumiałość :D");

const hamburger = document.querySelector('.menu-button--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})

const time = moment().format('MMMM Do YYYY, h:mm:ss a');
const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = time;

//pobranie i wypisanie repo z Githuba

const repositoryList = document.querySelector('.repository-list--js');

fetch('https://api.github.com/users/bartosz-malecki/repos')
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp) {
        const{name, html_url} = repo;
        console.log(`${name} ${html_url}`);
        const myTemplate = `<li><span class="inner-section-list__content">
            ${name}: <a href="${html_url}" class="external-link" target=_blank rel="noopener">${html_url}</a>
            </span></li>`;
        repositoryList.innerHTML += myTemplate;
    }
})
