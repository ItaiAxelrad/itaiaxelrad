// register a service worker
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
import {
  menuBtn,
  menuSvg,
  mobileNav,
  mobileLinks
} from './modules/mobile.js'
import {
  items,
  landingObserver
} from './modules/landing.js'
import {
  logo,
  topBtn,
  hero,
  heroObserver
} from './modules/btn.js'
import './modules/links.js'
import {
  body,
  toggleBtn
} from './modules/mode.js'