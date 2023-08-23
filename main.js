const apiKey = "34453568033520185829e493e504a827";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".searchBar input");
const searchButton = document.querySelector(".searchBar button");
const weatherIcon = document.querySelector(".weatherIcon");

async function getWeather(city_name){
    const response = await fetch(apiUrl + city_name + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        var data = await response.json();

        document.querySelector(".city_name").innerHTML = data.name;

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

        document.querySelector(".humidity").innerHTML = data.main.humidity + "% ";

        document.querySelector(".wind").innerHTML = data.wind.speed;

        document.querySelector(".feelsLike").innerHTML = Math.round(data.main.feels_like) + "°C";

        document.querySelector(".seaLevel").innerHTML = data.main.sea_level;

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/logo-set2/cloudy.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/logo-set2/clear.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "img/logo-set2/snow.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/logo-set2/rain.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/logo-set2/rain.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/logo-set2/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchButton.addEventListener("click", ()=>{
    getWeather(searchBox.value);
})



