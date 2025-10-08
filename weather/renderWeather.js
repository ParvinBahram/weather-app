
import FetchWeather from "./fetchWeather.js";
import WeatherUi from "./weatherUi.js";
import DateTime from "./dateTime.js";

export default class RenderWeather{
    constructor(apiKey){
        this.fetch = new FetchWeather(apiKey);
        this.ui = new WeatherUi();
        this.searchCity=document.querySelector(".search-city");
        this.searchBtn = document.querySelector(".search-btn");
        this.addEventListeners();
    }

    addEventListeners(){
        this.searchBtn.addEventListener("click",() => this.renderSearch());

        this.searchCity.addEventListener("keydown", (e)=>{
            if(e.key === "Enter"){
            this.renderSearch();
            }
        });

    }

    async renderSearch(){
        const city = this.searchCity.value.trim();
        if (!city) return ;
        const data = await this.fetch.getWeather(city);
        console.log(data);
        console.log("Timezone:", data?.timezone)
        this.searchCity.value = "";
        if(data) {
            const dateTime = new DateTime(this.fetch.data.timezone) ;

            const date = dateTime.getLocalDate();
            const time = dateTime.getLocalTime();

            this.ui.displayWeather(this.fetch,date, time)
        };

    }
}
