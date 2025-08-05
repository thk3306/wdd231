// Date utilities module

// Function to set the current year
export function setCurrentYear() {
    const today = new Date();
    const yearElement = document.querySelector("#year");
    
    if (yearElement) {
        yearElement.innerHTML = today.getFullYear();
    }
}

// Function to set the last modified date
export function setLastModified() {
    const lastModified = document.lastModified;
    const lastModifiedElement = document.querySelector("#lastModified");
    
    if (lastModifiedElement) {
        lastModifiedElement.innerHTML = lastModified;
    }
}

// Function to handle last visit tracking
export function handleLastVisit() {
    const currentVisit = Date.now();
    const lastVisitTime = localStorage.getItem('lastVisitTime');
    const lastvisitElement = document.querySelector("#lastvisit");
    
    if (!lastvisitElement) return;

    if (!lastVisitTime) {
        lastvisitElement.textContent = "Welcome to our site! This is your first visit.";
    } else {
        const timeDifference = currentVisit - parseInt(lastVisitTime);
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        
        if (daysDifference < 1) {
            lastvisitElement.textContent = "Welcome back! You last visited today.";
        } else if (daysDifference === 1) {
            lastvisitElement.textContent = "You last visited 1 day ago.";
        } else {
            lastvisitElement.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }

    localStorage.setItem('lastVisitTime', currentVisit);
}

// Function to initialize all date-related functionality
export function initializeDates() {
    setCurrentYear();
    setLastModified();
    handleLastVisit();
}

// Auto-initialize when module is imported (for backward compatibility)
document.addEventListener('DOMContentLoaded', initializeDates);