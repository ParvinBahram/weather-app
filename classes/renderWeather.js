
import FetchWeather from "./fetchWeather.js";
import WeatherUi from "./weatherUi.js";

export default class RenderWeather{
    constructor(apiKey){
        this.api = new FetchWeather(apiKey);
        this.ui = new WeatherUi();
        this.searchCity=document.querySelector(".search-city");
        this.searchBtn = document.querySelector(".search-btn");
        this.addEventListeners();
    }

    addEventListeners(){
        this.searchBtn.addEventListener("click",() => this.renderSearch())
    }

    async renderSearch(){
        const city = this.searchCity.value.trim();
        if (!city) return ;
        const data = await this.api.getWeather(city);
        console.log(data);
        this.searchCity.value = "";
        if(data) {
            this.ui.displayWeather(data)
        };

    }
}