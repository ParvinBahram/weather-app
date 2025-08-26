import config from "../config.js";

export default class FetchWeather{
    #apiKey ;
    #baseUrl ;

    constructor(){
        this.#apiKey = config.API_KEY;
        this.#baseUrl = config.BASE_URL ;
        this.data= null;
        this.error = null;
    }

    async getWeather (city){
          try {
       const response =  await fetch(
        `${this.#baseUrl}?&q=${city}&appid=${this.#apiKey}&units=metric`) ;
        console.log(response);

        const  data = await  response.json();
    
        if(!response.ok){
            throw new Error(data.message);
        }
        this.data = data;
        return this.data;
    } catch (err) {
        this.error = err.message;
        console.log(this.error)
        alert(err.message);
        return null;
    }
    }

    getCity (){
        return this.data?.name ?? "-"
    }

    getTemperature(){
        const temp =  this.data?.main?.temp;
        return temp !== undefined ? temp.toFixed(0) : "-";
    }

    getStatus(){
        return this.data?.weather?.[0]?.main ?? "-"
    }

    getHumidity(){
        return this.data?.main?.humidity ?? "-"
    }

    getWind(){
        return this.data?.wind?.speed ?? "-"
    }
}