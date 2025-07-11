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