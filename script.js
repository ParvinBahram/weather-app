
const searchCity= document.querySelector(".search-city");
const searchBtn= document.querySelector(".search-btn");
const cityTime =document.querySelector(".time")
const cityName= document.querySelector(".city-name");
const weatherStatus= document.querySelector(".weather-status");
const weatherStatusImage= document.querySelector(".weather-status-image");
const temperature = document.querySelector(".temperature");
const humidityPercentage = document.querySelector(".humidity-per");
const windSpeed = document.querySelector(".wind-speed");


const getWeather = async function(cityName){
    try {
       const response =  await fetch(
        `https://api.openweathermap.org/data/2.5/weather?&q=${cityName}&appid=c4b48be1f61aec0474c6a3a5087b9826&units=metric`) ;
        console.log(response)
        if(!response.ok){
            // const errorData = await response.json()
            // console.log(errorData);
            throw new Error("failed to find");
        }
        return response.json();
    } catch (err) {
        console.log(err.message)
        alert(err.message)
    }
}



searchBtn.addEventListener("click", async ()=>{
    if(!searchCity.value) return ;
    const data = await getWeather(searchCity.value);
    console.log(data)
    searchCity.value = "";
    if(!data) return;

    cityName.textContent = data.name;
    humidityPercentage.textContent = `${data.main.humidity}%`;
    temperature.textContent = `${data.main.temp} °C`;
    windSpeed.textContent = `${data.wind.speed} km/h`;
    weatherStatusImage.src = `assets/images/${data.weather[0].main}.svg`;
    weatherStatus.textContent = data.weather[0].description;

   

})