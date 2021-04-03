const menuBtn = document.querySelector("#menuBtn")
const menuSvg = document.querySelector("#menuSvg use")
const mobileNav = document.querySelector("#mobile-links")
const mobileLinks = document.querySelectorAll("#mobile-links a")
// toggle event function
const toggle = () => {
  if (mobileNav.getAttribute("aria-expanded") === "false") {
    mobileNav.classList.replace('closed', 'open')
    mobileNav.setAttribute('aria-expanded', "true");
    // change menu icon
    menuSvg.setAttribute("xlink:href", "images/defs.svg#times");
  } else if (mobileNav.getAttribute("aria-expanded") === "true") {
    mobileNav.classList.replace('open', 'closed')
    mobileNav.setAttribute('aria-expanded', "false");
    // change menu icon
    menuSvg.setAttribute("xlink:href", "images/defs.svg#bars");
  }
}
// open full curtain navigation menu
menuBtn.addEventListener('click', toggle);
// close menu when user clicks a link
mobileLinks.forEach(link => {
  link.addEventListener('click', toggle)
});

//export to main.js
export {
  menuBtn,
  menuSvg,
  mobileNav,
  mobileLinks
}