// Theme Toggle Script with localStorage
const themeToggleButton = document.getElementById("theme-toggle");
const themeToggleIcon = document.getElementById("theme-icon");

// Load theme from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggleIcon.classList.remove("fa-sun");
        themeToggleIcon.classList.add("fa-moon");
    } else {
        document.body.classList.remove("dark-mode");
        themeToggleIcon.classList.remove("fa-moon");
        themeToggleIcon.classList.add("fa-sun");
    }
});

// Handle toggle and save to localStorage
themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    const isDarkMode = document.body.classList.contains("dark-mode");

    // Update icon
    if (isDarkMode) {
        themeToggleIcon.classList.remove("fa-sun");
        themeToggleIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark");
    } else {
        themeToggleIcon.classList.remove("fa-moon");
        themeToggleIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "light");
    }
});
