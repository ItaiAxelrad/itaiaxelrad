if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js') // register a service worker
      .then(reg => console.log('Service Worker: Registered')) // Registration was successful
      .catch(err => console.log(`Service Worker: ${err}`)); // Registration error
  });
};

// import JS modules
import './static/scripts/modules/mobile.js'
import './static/scripts/modules/btn.js';
import './static/scripts/modules/landing.js'
// import './static/scripts/modules/links.js';
// import './static/scripts/modules/mode.js';