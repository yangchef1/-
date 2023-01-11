const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "d5785d8cf9e447ade2a31255e8f53266";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    console.log(lat, lng);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);