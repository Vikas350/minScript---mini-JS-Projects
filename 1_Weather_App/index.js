const cityName = document.querySelector('.city');
const cityTemp = document.querySelector('.temp');
const cityHumid = document.querySelector('.humidity');
const cityWind = document.querySelector('.wind');

const searchCity = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

const apiKey = "0fad1b99dc3a3426334550a63f5f5bc5";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

async function checkWeather(city) {
    const response = await fetch(apiURL + `&q=${city}`);

    //check for invalid city name
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = "none";
    }
    else {
        var weatherData = await response.json();
        console.log(weatherData);

        cityName.innerHTML = weatherData.name;
        cityTemp.innerHTML = Math.round(weatherData.main.temp) + "°C";
        cityHumid.innerHTML = weatherData.main.humidity + "%";
        cityWind.innerHTML = weatherData.wind.speed + "Km/h";

        if (weatherData.weather[0].main == "Clouds") {
            weatherIcon.src = "pics/clouds.png";
        }
        else if (weatherData.weather[0].main == "Clear") {
            weatherIcon.src = "pics/clear.png";
        }
        else if (weatherData.weather[0].main == "Drizzle") {
            weatherIcon.src = "pics/drizzle.png";
        }
        else if (weatherData.weather[0].main == "Rain") {
            weatherIcon.src = "pics/rain.png";
        }
        else if (weatherData.weather[0].main == "Mist") {
            weatherIcon.src = "pics/mist.png";
        }
        else if (weatherData.weather[0].main == "Snow") {
            weatherIcon.src = "pics/snow.png";
        }

        //generate data on entering city name and search
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = 'none';

    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchCity.value);
    searchCity.value = "";

})

