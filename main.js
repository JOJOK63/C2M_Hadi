import './style.scss';
import './apiCaller'
import * as apiCaller from "./apiCaller.js";
import * as citySaver from "./localStorageSave.js";
import * as genHtml from "./generateHtml.js";

let research = document.getElementById('city_search');
const citiesFromStorage = JSON.parse(localStorage.getItem('cities')) || [];

research.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    let city = research.value;
    citySaver.saveCity(city);
    genHtml.setInformationsList(citiesFromStorage);
   // console.log(event,city);
citiesFromStorage.forEach(city => {
    apiCaller.getCity(city);
});
}
});


