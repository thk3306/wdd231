const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75124&lon=6.63984&appid=4699897b20e248b1b6f5f515e8636dcb&units=metric";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {            
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    }
    apiFetch();
    function displayResults(data) {
        currentTemp.innerHTML = `${data.main.temp}&deg;C`;
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let desc = data.weather[0].description;
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
        captionDesc.textContent = `${desc}`;
    }
    
