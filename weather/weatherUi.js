
export default class WeatherUi{
    constructor(){
        this.cityName = document.querySelector(".city-name");
        this.weatherStatus = document.querySelector(".weather-status");
        this.weatherStatusImage = document.querySelector(".weather-status-image");
        this.temperature = document.querySelector(".temperature");
        this.humidityPercentage = document.querySelector(".humidity-per");
        this.windSpeed = document.querySelector(".wind-speed");   
    }

    displayWeather (fetch){
        this.cityName.textContent = fetch.getCity();
        this.humidityPercentage.textContent = `${fetch.getHumidity()}%`;
        this.temperature.textContent = `${fetch.getTemperature()} °C`;
        this.windSpeed.textContent = `${fetch.getWind()} km/h`;
        this.weatherStatusImage.src = `assets/images/${fetch.getStatus()}.svg`;
        this.weatherStatus.textContent = fetch.getStatus();
    }
}