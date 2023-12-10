let city_informations = document.querySelector('.city-informations-js');
let city_meteo = document.querySelector('.city-meteo-js');
let city_place = document.querySelector('.city-place-js');
let city_list = document.querySelector('.city-list-ul-js');


export function  setInformations(city) {
  
   let divCityInformations = document.createElement('div');
   divCityInformations.classList.add('city-div-informations');
   let ulInformations = document.createElement('ul');

   let liInformation1 = document.createElement('li');
   liInformation1.innerText = city.location.name;

   let liInformation2 = document.createElement('li');
   liInformation2.innerText = city.location.country;

//    let liInformation3 = document.createElement('li');
//    liInformation3.innerText = city.location.region;

   
   let liInformation4 = document.createElement('li');
   liInformation4.innerText = city.location.localtime;

   ulInformations.appendChild(liInformation1);
   ulInformations.appendChild(liInformation2);
//    ulInformations.appendChild(liInformation3);
   ulInformations.appendChild(liInformation4);

  divCityInformations.appendChild(ulInformations);

  city_meteo.append(divCityInformations);

  let divCityMeteoInformations = document.createElement('div');
  divCityMeteoInformations.classList.add('city-div-meteo');

  let ulMeteoInformations = document.createElement('ul');

  let liMeteoInformation1 = document.createElement('li');
  liMeteoInformation1.innerText = city.current.observation_time;

  let liMeteoInformation2 = document.createElement('li');
  liMeteoInformation2.innerText = city.current.temperature + "°C";

  let liMeteoInformation3 = document.createElement('li');
  let weatherIcon = document.createElement('img');
  weatherIcon.src = city.current.weather_icons;
  weatherIcon.alt = "Weather Icon";
  liMeteoInformation3.appendChild(weatherIcon);


  let liMeteoInformation4 = document.createElement('li');
  liMeteoInformation4.innerText = city.current.weather_descriptions;
  let liMeteoInformation5 = document.createElement('li');
  liMeteoInformation5.innerText = "Wind s" + city.current.wind_speed + " m/s";


  ulMeteoInformations.appendChild(liMeteoInformation1);
  ulMeteoInformations.appendChild(liMeteoInformation2);
  ulMeteoInformations.appendChild(liMeteoInformation3);
  ulMeteoInformations.appendChild(liMeteoInformation4);
  ulMeteoInformations.appendChild(liMeteoInformation5);
  divCityMeteoInformations.appendChild(ulMeteoInformations);

  city_meteo.append(divCityMeteoInformations);
}
  
export function setInformationsList(citiesFromStorage){
    city_list.innerHTML = '';
    citiesFromStorage.forEach(city => {
        let li = document.createElement('li');
        li.innerText = city;
        city_list.appendChild(li);
    });
}