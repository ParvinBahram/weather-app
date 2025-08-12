
export default class FetchWeather{
    constructor(apiKey){
        this.apiKey = apiKey
    }

    async getWeather (city){
          try {
       const response =  await fetch(
        `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${this.apiKey}&units=metric`) ;
        console.log(response)
        if(!response.ok){
            throw new Error("can not found city");
        }
        return response.json();
    } catch (err) {
        alert(err.message)
    }
    }
}