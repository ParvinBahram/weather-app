
export default class WeatherUi{
    constructor(){
        this.cityName = document.querySelector(".city-name");
        this.weatherStatus = document.querySelector(".weather-status");
        this.weatherStatusImage = document.querySelector(".weather-status-image");
        this.temperature = document.querySelector(".temperature");
        this.humidityPer = document.querySelector(".humidity-per");
        this.windSpeed = document.querySelector(".wind-speed");   
    }

    displayWeather (data){
        this.cityName.textContent = data.name;
        this.humidityPer.textContent = `${data.main.humidity}%`;
        this.temperature.textContent = `${data.main.temp} °C`;
        this.windSpeed.textContent = `${data.wind.speed} km/h`;
        this.weatherStatusImage.src = `assets/images/${data.weather[0].main}.svg`;
        this.weatherStatus.textContent = data.weather[0].description;
    }
}