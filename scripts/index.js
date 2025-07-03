function calculateWindChill(tempC, windSpeedKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * tempC * Math.pow(windSpeedKmh, 0.16);
}

const weatherEmojis = {
    0: "☀️",    // Clear
    1: "🌤️",   // Mainly Clear
    2: "⛅",    // Partly Cloudy
    3: "☁️",    // Overcast
    45: "🌫️",   // Fog
    48: "🌫️",   // Depositing Rime Fog
    51: "🌦️",   // Light Drizzle
    53: "🌦️",   // Moderate Drizzle
    55: "🌧️",   // Dense Drizzle
    56: "🌧️",   // Light Freezing Drizzle
    57: "🌧️",   // Dense Freezing Drizzle
    61: "🌦️",   // Slight Rain
    63: "🌧️",   // Moderate Rain
    65: "🌧️",   // Heavy Rain
    66: "🌧️",   // Light Freezing Rain
    67: "🌧️",   // Heavy Freezing Rain
    71: "🌨️",   // Slight Snow
    73: "🌨️",   // Moderate Snow
    75: "❄️",    // Heavy Snow
    77: "❄️",    // Snow Grains
    80: "🌦️",   // Slight Rain Showers
    81: "🌧️",   // Moderate Rain Showers
    82: "🌧️",   // Violent Rain Showers
    85: "🌨️",   // Slight Snow Showers
    86: "❄️",    // Heavy Snow Showers
    95: "⛈️",    // Slight Thunderstorm
    96: "⛈️",    // Thunderstorm with Slight Hail
    99: "⛈️"     // Thunderstorm with Heavy Hail
};

document.addEventListener("DOMContentLoaded", function () {
    const latitude = -36.8485;
    const longitude = 174.7635;
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("temperature").textContent = data.current.temperature_2m + "°C";
            let weather_code = data.current.weather_code;
            const emoji = weatherEmojis[weather_code] || "❓";
            document.getElementById("current-weather-emoji").textContent = `Current Weather ${emoji}`;
            let weather = "";
            switch (weather_code) {
                case 0: weather = "Clear"; break;
                case 1: weather = "Mainly Clear"; break;
                case 2: weather = "Partly Cloudy"; break;
                case 3: weather = "Overcast"; break;
                case 45: weather = "Fog"; break;
                case 48: weather = "Depositing Rime Fog"; break;
                case 51: weather = "Light Drizzle"; break;
                case 53: weather = "Moderate Drizzle"; break;
                case 55: weather = "Dense Drizzle"; break;
                case 56: weather = "Light Freezing Drizzle"; break;
                case 57: weather = "Dense Freezing Drizzle"; break;
                case 61: weather = "Slight Rain"; break;
                case 63: weather = "Moderate Rain"; break;
                case 65: weather = "Heavy Rain"; break;
                case 66: weather = "Light Freezing Rain"; break;
                case 67: weather = "Heavy Freezing Rain"; break;
                case 71: weather = "Slight Snow"; break;
                case 73: weather = "Moderate Snow"; break;
                case 75: weather = "Heavy Snow"; break;
                case 77: weather = "Snow Grains"; break;
                case 80: weather = "Slight Rain Showers"; break;
                case 81: weather = "Moderate Rain Showers"; break;
                case 82: weather = "Violent Rain Showers"; break;
                case 85: weather = "Slight Snow Showers"; break;
                case 86: weather = "Heavy Snow Showers"; break;
                case 95: weather = "Slight Thunderstorm"; break;
                case 96: weather = "Thunderstorm with Slight Hail"; break;
                case 99: weather = "Thunderstorm with Heavy Hail"; break;
                default: weather = "Unknown";
            }
            document.getElementById("conditions").textContent = weather;
            document.getElementById("wind").textContent = data.current.wind_speed_10m + " km/h";
            tempC = data.current.temperature_2m;
            windSpeedKmh = data.current.wind_speed_10m;
            if (tempC < 10 && windSpeedKmh > 4.8) {
            const windChill = calculateWindChill(tempC, windSpeedKmh);
            document.getElementById("windchill").textContent = windChill.toFixed(2) + "°C";
            }
            else {
                document.getElementById("windchill").textContent = "N/A";
            }
        })
        .catch(error => console.error("Error fetching weather data:", error));
});

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const countSpans = document.querySelectorAll(".count");
let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;

numVisits++;
window.localStorage.setItem("numVisits", numVisits);

countSpans.forEach(span => {
    span.textContent = numVisits;
});
