// Example of checking voter eligibility
function checkEligibility() {
    const age = prompt("Enter your age:");
    if (age >= 18) {
        alert("You are eligible to vote!");
    } else {
        alert("You must be at least 18 years old to vote.");
    }
}

// Trigger this on a button click or an event
document.getElementById("checkEligibilityButton").addEventListener("click", checkEligibility);

// Polling Station Locator using Leaflet.js
function initializeMap() {
    const map = L.map('mapid').setView([51.505, -0.09], 13); // Center of map (use actual coordinates for real app)

    // Tile Layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Example polling station
    L.marker([51.505, -0.09]).addTo(map)
        .bindPopup("<b>Polling Station</b><br>Location details here.")
        .openPopup();
}

// Initialize map when the page loads
window.onload = initializeMap;
