document.addEventListener('DOMContentLoaded',()=>{
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMsg = document.getElementById("error-message");
    

    const API_KEY = edc7ac38801637515f4e5d6401383fc3;
    getWeatherBtn.addEventListener('click',()=>{
        const city = cityInput.value.trim();
        if(!city){
            return;
        }

    })

})