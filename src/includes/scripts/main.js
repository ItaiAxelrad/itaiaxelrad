if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js') // register a service worker
      .then(reg => console.log('Service Worker: Registered')) // Registration was successful
      .catch(err => console.log(`Service Worker: ${err}`)); // Registration error
  });
};

// import JS modules
import './modules/attr.js'
import './modules/mobile.js'
import './modules/landing.js'
import './modules/btn.js'
import './modules/links.js'
import './modules/mode.js'