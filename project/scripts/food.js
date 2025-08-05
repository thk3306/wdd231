import { initializeHamburgerMenu } from './navigation.js';

// Initialize navigation
initializeHamburgerMenu();

const url = 'https://thk3306.github.io/wdd231/project/data/food.json';

const cards = document.querySelector('#places');

async function getPlacesData() {
    const response = await fetch(url);
    const data = await response.json();
    displayPlaces(data);
}

getPlacesData();

const displayPlaces = (places) => {
    places.forEach((place) => {
        const card = document.createElement('section');
        const name = document.createElement('h2');
        const image = document.createElement('img');
        const description = document.createElement('p');
        const button = document.createElement('button');
        const location = document.createElement('p');

        name.textContent = place.name;
        name.id = "name";
        image.setAttribute('src', `${place.photo_url}`);
        image.setAttribute('alt', `Image of ${place.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '300');
        image.id = "image";
        location.textContent = `Location: ${place.location}`;
        location.id = "location";
        description.textContent = `Description: ${place.description}`;
        description.id = "description";
        button.textContent = "Learn More";
        button.id = "button";
        button.addEventListener('click', () => {
            window.location.href = place.link;
        });
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(description);
        card.appendChild(location);
        card.appendChild(button);
        cards.appendChild(card);
        cards.classList.add('places');
    })
}
