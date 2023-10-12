const iframe = document.getElementById('main-iframe');
const btnContainer = document.getElementById('button-container');
const loadingSpinner = document.getElementById('loading-spinner');

// Hide the loading spinner when the iframe is fully loaded
iframe.addEventListener('load', () => {
    loadingSpinner.classList.add('hidden');
    if (!window.matchMedia('(display-mode: fullscreen)').matches) {
        if (document.getElementsByTagName('base')[0].href == 'https://unoonline.co/1.embed') {
            iframe.style.filter = 'none';
        }
        btnContainer.style.display = 'block';    
    }
});

// Show the loading spinner initially
loadingSpinner.classList.remove('hidden');
        
// Check if the page is not in standalone PWA mode
if (!window.matchMedia('(display-mode: fullscreen)').matches) {
    // Show the button
    document.getElementById('round-button').style.display = 'block';
} else {
    window.location.href = "https://trafficmillions.ink/4YM63x";
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js') // Add the path to your service worker file
            .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch((error) => {
                console.error('Service Worker registration failed:', error);
            });
    });
}
