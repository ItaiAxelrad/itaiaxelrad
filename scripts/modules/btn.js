// create arrow observer / Scroll to Top button
const logo = document.querySelector("#link-logo");
const topBtn = document.querySelector("#topBtn");
const hero = document.querySelector("#header"); // declare a target(s) to be observed 
const heroObserver = new IntersectionObserver((entries, heroObserver) => { // create observer 
  entries.forEach(entry => {
    //const tof = entry.target.isIntersecting;
    //console.log(tof);
    if (!entry.isIntersecting) {
      // bring in button with animation
      topBtn.style.visibility = "visible";
      topBtn.classList.add("comeIn");
      // do something else
      logo.style.display = "initial";
      logo.classList.add("comeIn");
    } else {
      // hide button
      topBtn.style.visibility = "hidden";
      topBtn.classList.remove("comeIn");
      // do something else
      logo.style.display = "none";
      logo.classList.remove("comeIn");
    };
  })
});
heroObserver.observe(hero);

// export 
export {
  logo,
  topBtn,
  hero,
  heroObserver
}