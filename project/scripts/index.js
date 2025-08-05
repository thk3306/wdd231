const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#conditions");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=-36.85646280918705&lon=174.7760109734543&appid=4699897b20e248b1b6f5f515e8636dcb&units=metric";

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
        currentTemp.innerHTML = `${data.main.temp}&deg;C\n`;
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let desc = data.weather[0].description;
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
        captionDesc.textContent = `${desc.charAt(0).toUpperCase() + desc.slice(1)}`;
    }