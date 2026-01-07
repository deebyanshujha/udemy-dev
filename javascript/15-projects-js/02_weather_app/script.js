import { API_KEY } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMsg = document.getElementById("error-message");

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) {
      return;
    }

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });
  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url)
    console.log(typeof response)

    if(!response.ok){
        return new error("City not found!")
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    weatherInfo.classList.remove("hidden");
    errorMsg.classList.add("hidden");
    const {name, main, weather} = data;
    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temperature: ${main.temp}\u00B0C`;
    descriptionDisplay.textContent = `Weather: ${weather[0].description}`
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
});
