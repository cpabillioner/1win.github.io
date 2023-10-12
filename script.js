const iframe = document.getElementById('main-iframe');
const loadingSpinner = document.getElementById('loading-spinner');

// Hide the loading spinner when the iframe is fully loaded
iframe.addEventListener('load', () => {
    loadingSpinner.classList.add('hidden');
});

// Show the loading spinner initially
loadingSpinner.classList.remove('hidden');
