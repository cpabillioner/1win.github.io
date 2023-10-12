const iframe = document.getElementById('main-iframe');
const loadingSpinner = document.getElementById('loading-spinner');
const logos = document.

// Hide the loading spinner when the iframe is fully loaded
iframe.addEventListener('load', () => {
    loadingSpinner.classList.add('hidden');
    document.querySelectorAll('.install').forEach(install => install.style.display = 'block')
});

// Show the loading spinner initially
loadingSpinner.classList.remove('hidden');
