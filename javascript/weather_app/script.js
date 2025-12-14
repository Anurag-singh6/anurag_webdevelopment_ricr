async function getweather() {
  const city = document.getElementById("city").value.trim();

  const { lat, lon } = await getgeolocation(city);

  console.log(lat);
  console.log(lon);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f1525943f58964d682729c033ec59d21`
  );
  const data = await response.json();

  document.getElementById("wdata").innerHTML = ` 
        <div>
          <p>Temperature: ${(data.main.temp - 273.4).toFixed(2)}⁰C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Description: ${data.weather[0].description}</p>
          </div>
          <img src="http://openweathermap.org/img/wn/${
            data.weather[0].icon
          }@4x.png" alt="weather icon"/>`;
}

async function getgeolocation(city) {
  console.log(city);
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=f1525943f58964d682729c033ec59d21`
  );
  const data = await response.json();

  const lat = data[0].lat;
  const lon = data[0].lon;

  return { lat, lon };
}
