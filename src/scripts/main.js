if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js') // register a service worker
      .then(reg => console.log('Service Worker: Registered')) // Registration was successful
      .catch(err => console.log(`Service Worker: ${err}`)); // Registration error
  });
};

// import JS modules
import '/scripts/modules/mobile.js'
import '/scripts/modules/landing.js'
import '/scripts/modules/btn.js'
import '/scripts/modules/links.js'
import '/scripts/modules/mode.js'