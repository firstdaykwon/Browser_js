const API_KEY = "89a0f01199ae8280cfea07c9d3de7549";

function onGeoSuccess(position) {
  // 위도
  const lat = position.coords.latitude;
  // 경도
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find your location. I can't give you a weather info:(");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
