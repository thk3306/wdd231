const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#condition");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=-36.85646280918705&lon=174.7760109734543&appid=4699897b20e248b1b6f5f515e8636dcb&units=metric";

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=-36.85646280918705&lon=174.7760109734543&appid=4699897b20e248b1b6f5f515e8636dcb&units=metric";

const forecastSection = document.querySelector('#forecast');

async function apiFetch() {
    try {
        const response = await fetch(url);
        const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            displayForecast(forecastData);
        } else {
            throw Error(await forecastResponse.text());
        }
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
        currentTemp.innerHTML = `Temperature: ${data.main.temp}&deg;C\n`;
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let desc = data.weather[0].description;
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
        captionDesc.textContent = `Condition: ${desc.charAt(0).toUpperCase() + desc.slice(1)}`;
    }

function displayForecast(data) {
    const forecast = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    forecastSection.innerHTML = '';
    
    forecast.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const iconSrc = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
        const temp = item.main.temp.toFixed(1);
        
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <img src="${iconSrc}" alt="Weather icon">
            <p>${day}: ${temp}&deg;C</p>
        `;
        
        forecastSection.appendChild(forecastItem);
    });
}

const cards = document.querySelector('#cards');

const memberUrl = 'https://thk3306.github.io/wdd231/chamber/data/members.json';

async function getMemberData() {
    const response = await fetch(memberUrl);
    const data = await response.json();
    console.log(data);
    displayMembers(data);
}

const displayMembers = (members) => {
    
    const filteredMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
  
    const shuffled = filteredMembers.sort(() => 0.5 - Math.random());
  
    const selected = shuffled.slice(0, 3);
    selected.forEach((member) => {
        const card = document.createElement('section');
        const name = document.createElement('h2');
        const image = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('a');
        const membershipLevel = document.createElement('p');
        const description = document.createElement('p');
        const contactEmail = document.createElement('p');
        
        name.textContent = member.name;
        image.setAttribute('src', `${member.image}`);
        image.setAttribute('alt', `Image of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '300');
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        website.setAttribute('href', member.website);
        website.textContent = `Website: ${member.website}`;
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        description.textContent = `Description: ${member.description}`;
        contactEmail.textContent = `Contact Email: ${member.contactEmail}`;
        
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLevel);
        card.appendChild(description);
        card.appendChild(contactEmail);
        cards.appendChild(card);
    })
}

getMemberData().then(() => {
    cards.classList.add('grid');
});
