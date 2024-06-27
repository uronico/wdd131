// Get the current year
const currentYear = new Date().getFullYear();

// Update the current year span
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date of the page
const lastModified = document.lastModified;

// Update the last modified paragraph
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;