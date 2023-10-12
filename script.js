const iframe = document.getElementById('main-iframe');
const btnContainer = document.getElementById('button-container');
const loadingSpinner = document.getElementById('loading-spinner');

// Hide the loading spinner when the iframe is fully loaded
iframe.addEventListener('load', () => {
    loadingSpinner.classList.add('hidden');
    btnContainer.style.display = 'block';
});

// Show the loading spinner initially
loadingSpinner.classList.remove('hidden');
