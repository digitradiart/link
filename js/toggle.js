// Select the button
const toggle = document.querySelector('#btn-toggle');
// Select the stylesheet <link>
const theme = document.querySelector('#theme-link');

// Listen for a click on the button
toggle.addEventListener('click', function() {
    // If the current URL contains "light.css"
    if (theme.getAttribute('href') == 'css/light.css') {
        // ... then switch it to "dark-theme.css"
        theme.href = 'css/dark.css';
        // Otherwise...
    } else {
        // ... switch it to "light.css"
        theme.href = 'css/light.css';
    }
});