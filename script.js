const API_KEY = "YOUR_OPENWEATHER_API_KEY";  // Replace with your API key
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");
const errorMessage = document.getElementById("error-message");

searchBtn.addEventListener("click", () => {
    const cityName = cityInput.value.trim();
    if (cityName === "") {
        errorMessage.textContent = "Please enter a city name.";
        errorMessage.classList.remove("hidden");
        weatherResult.classList.add("hidden");
        return;
    }

    fetch(https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY})
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                errorMessage.textContent = "City not found. Please try again.";
                errorMessage.classList.remove("hidden");
                weatherResult.classList.add("hidden");
                return;
            }

            errorMessage.classList.add("hidden");
            weatherResult.classList.remove("hidden");

            document.getElementById("city-name").textContent = data.name;
            document.getElementById("temperature").textContent = Temperature: ${data.main.temp}°C;
            document.getElementById("humidity").textContent = Humidity: ${data.main.humidity}%;
            document.getElementById("description").textContent = Condition: ${data.weather[0].description};
            document.getElementById("weather-icon").src = https://openweathermap.org/img/wn/${data.weather[0].icon}.png;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            errorMessage.textContent = "Error retrieving weather data. Try again later.";
            errorMessage.classList.remove("hidden");
            weatherResult.classList.add("hidden");
        });
});
