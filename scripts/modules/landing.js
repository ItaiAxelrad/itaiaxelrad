// create landing element observer
const items = document.querySelectorAll("article"); // declare a target(s) to be observed 
const landingObserver = new IntersectionObserver((entries, landingObserver) => { // create observer
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("comeIn"); // do something
    };
  });
});

// create forEach loop to observe all array items
items.forEach(item => {
  landingObserver.observe(item);
});

// export module to main.js
export {
  items,
  landingObserver
}