const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

import { places } from "../data/places.mjs";

const cards = document.querySelector('#places');

const displayPlaces = (places) => {
    places.forEach((place) => {
        const card = document.createElement('section');
        const name = document.createElement('h2');
        const image = document.createElement('img');
        const address = document.createElement('address');
        const description = document.createElement('p');
        const button = document.createElement('button');

        name.textContent = place.name;
        name.id = "name";
        image.setAttribute('src', `${place.photo_url}`);
        image.setAttribute('alt', `Image of ${place.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '300');
        image.id = "image";
        address.textContent = `Address: ${place.address}`;
        address.id = "address";
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
        card.appendChild(address);
        card.appendChild(button);
        cards.appendChild(card);
        cards.classList.add('places');
    })
}

displayPlaces(places.auckland_attractions);

const currentVisit = Date.now();
const lastVisitTime = localStorage.getItem('lastVisitTime');

if (!lastVisitTime) {
    lastvisit.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const timeDifference = currentVisit - parseInt(lastVisitTime);
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    if (daysDifference < 1) {
        lastvisit.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        lastvisit.textContent = "You last visited 1 day ago.";
    } else {
        lastvisit.textContent = `You last visited ${daysDifference} days ago.`;
    }
}

localStorage.setItem('lastVisitTime', currentVisit);
