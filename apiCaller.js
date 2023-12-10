import * as genHtml from "./generateHtml.js";

export async function  getCity(cityUser) {
    let response = await fetch(`http://api.weatherstack.com/current?access_key=427e8a05fa40cb2f8e4feee635e1f7b3&query= ${cityUser}`);
    let city = await response.json();
    console.log(city,city.location.name);

    genHtml.setInformations(city);
  }
  