import DateTime from "./dateTime.js";

export default class WeatherUi{
    constructor(){
        this.cityName = document.querySelector(".city-name");
        this.weatherStatus = document.querySelector(".weather-status");
        this.weatherStatusImage = document.querySelector(".weather-status-image");
        this.temperature = document.querySelector(".temperature");
        this.humidityPercentage = document.querySelector(".humidity-per");
        this.windSpeed = document.querySelector(".wind-speed"); 
        this.localDate = document.querySelector(".date") ;
        this.localTime = document.querySelector(".time") ;
        this.sunrise = document.querySelector(".sunrise-time");
        this.sunset = document.querySelector(".sunset-time");


    }

    displayWeather (fetch, date, time){
        this.cityName.textContent = fetch.getCity();
        this.humidityPercentage.textContent = `${fetch.getHumidity()}%`;
        this.temperature.textContent = `${fetch.getTemperature()} °C`;
        this.windSpeed.textContent = `${fetch.getWind()} km/h`;
        this.weatherStatusImage.src = `assets/images/${fetch.getStatus()}.svg`;
        this.weatherStatus.textContent = fetch.getStatus();
        this.localDate.textContent =` ${date}` ;
        this.localTime.textContent = `${time}🕑` ;
        
        const dateTime = new DateTime(fetch.data.timezone);
        this.sunrise.textContent = dateTime.getTimestamp(fetch.getSunrise());
        this.sunset.textContent = dateTime.getTimestamp(fetch.getSunset());
    }

}