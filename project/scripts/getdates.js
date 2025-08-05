// Get the current date
const today = new Date();

// Select the element with the id "year"
const yearElement = document.querySelector("#year");

// Set the innerHTML of the selected element to the current year
if (yearElement) {
    yearElement.innerHTML = today.getFullYear();
}

let lastModified = document.lastModified;
// Select the element with the id "lastModified"
const lastModifiedElement = document.querySelector("#lastModified");

// Set the innerHTML of the selected element to the last modified date
if (lastModifiedElement) {
    lastModifiedElement.innerHTML = lastModified;
}

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