const apiKey = "08622524f2e025239f01038b0df366fe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    }else{
        
    }
    
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector("#feels_like").innerHTML = `Feels like: ${data.main.feels_like}`
    document.querySelector("#grnd_level").innerHTML = `Grnd level: ${data.main.grnd_level} hpa`
    document.querySelector("#pressure").innerHTML = `Pressure: ${data.main.pressure} hpa`
    document.querySelector("#sea_level").innerHTML = `Sea Level: ${data.main.sea_level} hpa`

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

// Search button click event
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Search input field keydown event (for Enter key press)
searchBox.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});

